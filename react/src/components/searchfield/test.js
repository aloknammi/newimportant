const axios =require("axios");

const https = require('https');



const dsProdfix=async()=>{

    try{

        const instance = axios.create({

            httpsAgent: new https.Agent({  

              rejectUnauthorized: false

            })

          });

          instance.get('https://ds-aks-pf.walgreens.com/mse/benefit-modeler/api/modeledBenefits');



// At request level

const agent = new https.Agent({  

  rejectUnauthorized: false

});




        const result =await axios({

            method: 'post',

            url: 'https://ds-aks-pf.walgreens.com/mse/benefit-modeler/api/modeledBenefits',

            data: {

                     "benefitModelID": 1,

                     "storeNbr": "All",

                     "departmentList": ["All"]

    

            },
            headers:{
            'Ocp-Apim-Subscription-Key':'4a109346edf04a06babeba3f9d669227',
            'Ocp-Apim-Trace':true,
            'Content-Type':'application/json'
            }
            },{httpsAgent:agent})
            console.log('result',result)
            }catch(err){
            console.log(err)
            }
            
            }
            dsProdfix();
            
            