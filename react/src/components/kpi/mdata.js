export const mdata = {

    "storeNbr": 3571,

    "departmentListAndSizes": [

        {

            "departmentID": 3410,

            "benefitsForSizes": [

                {

                    "footage": 10.0,

                    "units": 84.55477350828399,

                    "sales": 84.55477350828399,

                    "grossMargin": 84.55477350828399,

                    "comprehensiveProfit": 84.55477350828399

                },

                {

                    "footage": 15.0,

                    "units": 105.57315281147139,

                    "sales": 105.57315281147139,

                    "grossMargin": 105.57315281147139,

                    "comprehensiveProfit": 105.57315281147139

                },

                {

                    "footage": 25.0,

                    "units": 121.26406122206913,

                    "sales": 121.26406122206913,

                    "grossMargin": 121.26406122206913,

                    "comprehensiveProfit": 121.26406122206913

                }

            ]

        },
        {

            "departmentID": 3328,

            "benefitsForSizes": [

                {

                    "footage": 35.0,

                    "units": 84.55477350828399,

                    "sales": 84.55477350828399,

                    "grossMargin": 84.55477350828399,

                    "comprehensiveProfit": 84.55477350828399

                },

                {

                    "footage": 45.0,

                    "units": 105.57315281147139,

                    "sales": 105.57315281147139,

                    "grossMargin": 105.57315281147139,

                    "comprehensiveProfit": 105.57315281147139

                },

                {

                    "footage": 55.0,

                    "units": 121.26406122206913,

                    "sales": 121.26406122206913,

                    "grossMargin": 121.26406122206913,

                    "comprehensiveProfit": 121.26406122206913

                }

            ]

        }

    ]

}
/*
const seriesDataz = [];
seriesDataz.push(mdata);

const itemsz = seriesDataz.map((item) => {
    return item.departmentListAndSizes

});

const merge3 = itemsz.flat(1)

const itemszx = merge3.find((item) => {
    return item.departmentID === 3328

});

const itemszxx = itemszx.benefitsForSizes

var tmpResult = itemszxx.reduce((r, o) => {
Object.entries(o).forEach(([k, v]) => {
       r[k] = r[k] || []
       if(!r[k].includes(v)) r[k].push(v)
    });
    return r;
  }, 
  Object.create(null));

  const obj = JSON.parse(JSON.stringify(tmpResult)); const ser = []; ser.push(obj);

if(ser.length>0){
    for (const [key, value] of Object.entries(ser[0])) {
        ser.push({
                 name: key,
                 data: value
            })
    }
}
const newval = ser.slice(1);
console.log(newval)*/