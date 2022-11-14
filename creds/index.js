const express = require("express");
const {google} = require("googleapis");
const fs = require("fs");

const app = express();
app.set("view engine", "html");
app.use(express.urlencoded({extended: true}));

const spreadsheetId = "1_jIUFexLQcUWuJesxjr_tD3tUo3MyMLBmNcJWX4MsDQ";

app.get("/", async (req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
        });
    
        const client = await auth.getClient();
    
        const googleSheets = google.sheets({version: "v4", auth: client });
        
        //get the meta data
        const metaData = await googleSheets.spreadsheets.get({
            auth,
            spreadsheetId,
        });
    
        //get rows from sheet
        const getRows = await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId,
            range: "Sheet1",
        })
        res.send(getRows.data);
        

})

app.post("/", async (req, res) => {

    

    //writing the rows
    const add_data = await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1",
        valueInputOption: "USER_ENTERED",
        resource: { 
            values: [["Jimmy Happy", "Rocco"]],
        },
    });

});



app.listen(1337, (req, res) => console.log('running on 1337'));

