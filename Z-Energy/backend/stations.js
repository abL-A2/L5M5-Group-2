const stationSchema = require('./stationSchema');

async function createStationList(){
    const newStation = await stationSchema.create(
        
            
                {
                  "station_id": 1001,
                  "name": "Z Aerodrome Road",
                  "address": "Aerodrome Road",
                  "latitude": -36.8792,
                  "longitude": 174.7721,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "LPG swap", "Pay at pump", "Wifi", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.429,
                    "Z91 unleaded": 2.169,
                    "Z Diesel": 2.299
                  },
                  "station_type": ["Service station", "Truck stop"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1002,
                  "name": "Z 11th Ave",
                  "address": "Cnr Eleventh Avenue and Cameron Road, Tauranga",
                  "latitude": -37.6735,
                  "longitude": 176.1642,
                  "fuel_types": ["ZX Premium", "Z91 unleaded"],
                  "services": ["Car wash", "Food & drink", "Pay in app", "Pay at pump", "Toilets"],
                  "price_per_litre": {
                    "ZX Premium": 2.519,
                    "Z91 unleaded": 2.239
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1003,
                  "name": "Z 15th Ave",
                  "address": "10-18 Fifteenth Avenue, Tauranga",
                  "latitude": -37.6810,
                  "longitude": 176.1675,
                  "fuel_types": ["Z91 unleaded", "Z Diesel"],
                  "services": ["Pay in app", "Pay by late", "Food & drink", "Tyre pressure", "ATM"],
                  "price_per_litre": {
                    "Z91 unleaded": 2.189,
                    "Z Diesel": 2.299
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "10am-5pm",
                    "Tuesday": "10am-5pm",
                    "Wednesday": "10am-5pm",
                    "Thursday": "10am-5pm",
                    "Friday": "10am-5pm",
                    "Saturday": "10am-5pm",
                    "Sunday": "10am-5pm"
                  }
                },
                {
                  "station_id": 1004,
                  "name": "Z Albany",
                  "address": "287 Oteha Valley Road, Albany",
                  "latitude": -36.7269,
                  "longitude": 174.7247,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Trailer hire", "Car wash", "LPG swap", "Wifi", "Pay at pump"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.199,
                    "Z Diesel": 2.329
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "10am-5pm",
                    "Tuesday": "10am-5pm",
                    "Wednesday": "10am-5pm",
                    "Thursday": "10am-5pm",
                    "Friday": "10am-5pm",
                    "Saturday": "10am-5pm",
                    "Sunday": "10am-5pm"
                  }
                },
                {
                  "station_id": 1005,
                  "name": "Z Avondale",
                  "address": "50-60 Ash Street, Avondale, West Auckland",
                  "latitude": -36.8832,
                  "longitude": 174.7184,
                  "fuel_types": ["ZX Premium", "Z91 unleaded"],
                  "services": ["Engine oil", "Tyre pressure", "Food & drink", "Pay at pump", "Wifi"],
                  "price_per_litre": {
                    "ZX Premium": 2.429,
                    "Z91 unleaded": 2.179
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1006,
                  "name": "Z Beach Rd",
                  "address": "150 Beach Road",
                  "latitude": -36.7805,
                  "longitude": 174.7754,
                  "fuel_types": ["Z91 unleaded", "Z Diesel"],
                  "services": ["ATM", "Food & drink", "Pay in app", "Toilets"],
                  "price_per_litre": {
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "10am-5pm",
                    "Tuesday": "10am-5pm",
                    "Wednesday": "10am-5pm",
                    "Thursday": "10am-5pm",
                    "Friday": "10am-5pm",
                    "Saturday": "10am-5pm",
                    "Sunday": "10am-5pm"
                  }
                },
                {
                  "station_id": 1007,
                  "name": "Z Bethlehem",
                  "address": "253B State Highway 2",
                  "latitude": -37.6878,
                  "longitude": 176.1863,
                  "fuel_types": ["ZX Premium", "Z91 unleaded"],
                  "services": ["Car wash", "Tyre pressure", "Food & drink", "Pay in app", "Wifi"],
                  "price_per_litre": {
                    "ZX Premium": 2.499,
                    "Z91 unleaded": 2.229
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "10am-5pm",
                    "Tuesday": "10am-5pm",
                    "Wednesday": "10am-5pm",
                    "Thursday": "10am-5pm",
                    "Friday": "10am-5pm",
                    "Saturday": "10am-5pm",
                    "Sunday": "10am-5pm"
                  }
                },
                {
                  "station_id": 1008,
                  "name": "Z Botany Downs",
                  "address": "550 Te Irirangi Drive, Botany Downs, Auckland",
                  "latitude": -36.9543,
                  "longitude": 174.9249,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Pay at pump", "Food & drink", "Wifi", "Pay by late"],
                  "price_per_litre": {
                    "ZX Premium": 2.469,
                    "Z91 unleaded": 2.179,
                    "Z Diesel": 2.309
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1009,
                  "name": "Z Browns Rd",
                  "address": "270 Roscommon Road",
                  "latitude": -37.0112,
                  "longitude": 174.7755,
                  "fuel_types": ["Z91 unleaded", "Z Diesel"],
                  "services": ["Trailer hire", "Car wash", "Tyre pressure", "Pay in app", "ATM"],
                  "price_per_litre": {
                    "Z91 unleaded": 2.199,
                    "Z Diesel": 2.289
                  },
                  "station_type": ["Service station", "Truck stop"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
              {
                  "station_id": 1010,
                  "name": "Z Cambridge",
                  "address": "81 Victoria Street, Cambridge",
                  "latitude": -37.8741,
                  "longitude": 175.4644,
                  "fuel_types": ["ZX Premium", "Z91 unleaded"],
                  "services": ["Car wash", "Tyre pressure", "Food & drink", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.449,
                    "Z91 unleaded": 2.199
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "10am-5pm",
                    "Tuesday": "10am-5pm",
                    "Wednesday": "10am-5pm",
                    "Thursday": "10am-5pm",
                    "Friday": "10am-5pm",
                    "Saturday": "10am-5pm",
                    "Sunday": "10am-5pm"
                  }
                },
              
              
              
              
                {
                  "station_id": 1011,
                  "name": "Z Central Parade",
                  "address": "500 Maunganui Road, Mount Maunganui",
                  "latitude": -37.6404,
                  "longitude": 176.1675,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "Wifi", "Toilets"],
                  "price_per_litre": {
                    "ZX Premium": 2.529,
                    "Z91 unleaded": 2.179,
                    "Z Diesel": 2.319
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1012,
                  "name": "Z Clevedon",
                  "address": "24-28 Papakura-Clevedon Road",
                  "latitude": -37.0367,
                  "longitude": 174.9392,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "LPG swap", "Tyre pressure", "Pay at pump"],
                  "price_per_litre": {
                    "ZX Premium": 2.469,
                    "Z91 unleaded": 2.199,
                    "Z Diesel": 2.319
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "10am-5pm",
                    "Tuesday": "10am-5pm",
                    "Wednesday": "10am-5pm",
                    "Thursday": "10am-5pm",
                    "Friday": "10am-5pm",
                    "Saturday": "10am-5pm",
                    "Sunday": "10am-5pm"
                  }
                },
                {
                  "station_id": 1013,
                  "name": "Z Tuhikaramea (Z Dinsdale)",
                  "address": "Cnr Whatawhata Road and Tuhikaramea Road, Dinsdale, Hamilton",
                  "latitude": -37.7632,
                  "longitude": 175.2843,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "LPG swap", "Food & drink", "Pay at pump", "Tyre pressure"],
                  "price_per_litre": {
                    "ZX Premium": 2.479,
                    "Z91 unleaded": 2.179,
                    "Z Diesel": 2.289
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "10am-5pm",
                    "Tuesday": "10am-5pm",
                    "Wednesday": "10am-5pm",
                    "Thursday": "10am-5pm",
                    "Friday": "10am-5pm",
                    "Saturday": "10am-5pm",
                    "Sunday": "10am-5pm"
                  }
                },
                {
                  "station_id": 1014,
                  "name": "Z Eastside",
                  "address": "116 Grey Street, Hamilton",
                  "latitude": -37.7872,
                  "longitude": 175.2811,
                  "fuel_types": ["Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "Z91 unleaded": 2.189,
                    "Z Diesel": 2.289
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1015,
                  "name": "Z Ellerslie",
                  "address": "301 Ellerslie-Panmure Highway, Mt Wellington, Auckland",
                  "latitude": -36.9241,
                  "longitude": 174.8345,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "Wifi", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.549,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1016,
                  "name": "Z Fenton St",
                  "address": "Cnr Fenton and Victoria Street, Rotorua",
                  "latitude": -38.1373,
                  "longitude": 176.2504,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Pay at pump", "Car wash", "Tyre pressure", "Food & drink", "Pay in app"],
                  "price_per_litre": {
                    "ZX Premium": 2.469,
                    "Z91 unleaded": 2.199,
                    "Z Diesel": 2.309
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "10am-5pm",
                    "Tuesday": "10am-5pm",
                    "Wednesday": "10am-5pm",
                    "Thursday": "10am-5pm",
                    "Friday": "10am-5pm",
                    "Saturday": "10am-5pm",
                    "Sunday": "10am-5pm"
                  }
                },
                {
                  "station_id": 1017,
                  "name": "Z Te Papanui (Z Five Cross Roads)",
                  "address": "243 Peachgrove Road, Enderley, Hamilton",
                  "latitude": -37.7592,
                  "longitude": 175.2871,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "LPG swap", "Pay in app", "Pay at pump"],
                  "price_per_litre": {
                    "ZX Premium": 2.529,
                    "Z91 unleaded": 2.199,
                    "Z Diesel": 2.329
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1018,
                  "name": "Z Frankton",
                  "address": "Cnr Lincoln and Edgar Streets, Frankton, Hamilton",
                  "latitude": -37.7755,
                  "longitude": 175.2799,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM", "Toilets"],
                  "price_per_litre": {
                    "ZX Premium": 2.519,
                    "Z91 unleaded": 2.199,
                    "Z Diesel": 2.309
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1019,
                  "name": "Z Glen Innes",
                  "address": "222-236 Apirana Avenue, Glen Innes, Auckland",
                  "latitude": -36.8756,
                  "longitude": 174.8412,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Pay in app", "Tyre pressure", "Food & drink", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.549,
                    "Z91 unleaded": 2.219,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "10am-5pm",
                    "Tuesday": "10am-5pm",
                   "Wednesday": "10am-5pm",
                    "Thursday": "10am-5pm",
                    "Friday": "10am-5pm",
                    "Saturday": "10am-5pm",
                    "Sunday": "10am-5pm"
                  }
                },
                {
                  "station_id": 1020,
                  "name": "Z Glen Park",
                  "address": "241 Glenfield Road, Hillcrest, North Shore",
                  "latitude": -36.7851,
                  "longitude": 174.7323,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM", "Wifi"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.239,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1021,
                  "name": "Z Green Bay",
                  "address": "82 Godley Road, Green Bay, Auckland",
                  "latitude": -36.9605,
                  "longitude": 174.6383,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "ATM", "Pay at pump", "Wifi"],
                  "price_per_litre": {
                    "ZX Premium": 2.539,
                    "Z91 unleaded": 2.209,
                    "Z Diesel": 2.329
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "10am-6pm",
                    "Tuesday": "10am-6pm",
                    "Wednesday": "10am-6pm",
                    "Thursday": "10am-6pm",
                    "Friday": "10am-6pm",
                    "Saturday": "10am-6pm",
                    "Sunday": "10am-6pm"
                  }
                },
                {
                  "station_id": 1022,
                  "name": "Z Greenlane",
                  "address": "128 Greenlane Road, Greenlane, Auckland",
                  "latitude": -36.9149,
                  "longitude": 174.7845,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "ATM", "Pay at pump", "Wifi"],
                  "price_per_litre": {
                    "ZX Premium": 2.549,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1023,
                  "name": "Z Greville Rd",
                  "address": "43 Greville Road, Albany",
                  "latitude": -36.7294,
                  "longitude": 174.7250,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "ATM", "Pay at pump", "Wifi"],
                  "price_per_litre": {
                    "ZX Premium": 2.549,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1024,
                  "name": "Z Hautapu",
                  "address": "167 Victoria Road, Cambridge, New Zealand",
                  "latitude": -37.8762,
                  "longitude": 175.4743,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.529,
                    "Z91 unleaded": 2.209,
                    "Z Diesel": 2.319
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1025,
                  "name": "Z Henderson Valley",
                  "address": "1 Corban Avenue, Henderson, Auckland",
                  "latitude": -36.8611,
                  "longitude": 174.5972,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "Wifi", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.549,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1026,
                  "name": "Z Hunters Corner",
                  "address": "72-76 East Tamaki Road, Papatoetoe, South Auckland",
                  "latitude": -36.9763,
                  "longitude": 174.8965,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM", "Wifi"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.219,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1027,
                  "name": "Z Huntly",
                  "address": "390 Great South Road, Huntly",
                  "latitude": -37.5842,
                  "longitude": 175.4191,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM", "Wifi"],
                  "price_per_litre": {
                    "ZX Premium": 2.529,
                    "Z91 unleaded": 2.209,
                    "Z Diesel": 2.319
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "10am-6pm",
                    "Tuesday": "10am-6pm",
                    "Wednesday": "10am-6pm",
                    "Thursday": "10am-6pm",
                    "Friday": "10am-6pm",
                    "Saturday": "10am-6pm",
                    "Sunday": "10am-6pm"
                  }
                },
                {
                  "station_id": 1028,
                  "name": "Z Kahikatea Drive",
                  "address": "124-126 Kahikatea Drive, Hamilton",
                  "latitude": -37.7832,
                  "longitude": 175.2862,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM", "Tyre pressure"],
                  "price_per_litre": {
                    "ZX Premium": 2.539,
                    "Z91 unleaded": 2.219,
                    "Z Diesel": 2.329
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },{
                  "station_id": 1029,
                  "name": "Z Kaikohe",
                  "address": "Broadway, Kaikohe",
                  "latitude": -35.2953,
                  "longitude": 173.2672,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.239,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1030,
                  "name": "Z Kaitaia",
                  "address": "141-145 Commerce Street, Kaitaia",
                  "latitude": -35.0853,
                  "longitude": 173.2558,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1031,
                  "name": "Z Kamo",
                  "address": "382 Kamo Road, Whangarei",
                  "latitude": -35.7346,
                  "longitude": 174.3245,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.329
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1032,
                  "name": "Z Kawerau",
                  "address": "6 Islington Street, Kawerau",
                  "latitude": -38.0706,
                  "longitude": 176.6841,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.239,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1033,
                  "name": "Z Kensington",
                  "address": "Cnr Kamo Rd and Nixon Street, Whangarei",
                  "latitude": -35.7448,
                  "longitude": 174.3221,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.239,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1034,
                  "name": "Z Kepa Rd",
                  "address": "154 Kepa Road, Orakei, Auckland",
                  "latitude": -36.8665,
                  "longitude": 174.8025,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM", "Wifi"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.329
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1035,
                  "name": "Z Kingsway",
                  "address": "26 Clevedon Road, Papakura",
                  "latitude": -37.0902,
                  "longitude": 174.9364,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.549,
                    "Z91 unleaded": 2.219,
                    "Z Diesel": 2.329
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1036,
                  "name": "Z Kumeu",
                  "address": "134-152 Main Road, State Highway 16, Kumeu",
                  "latitude": -36.7784,
                  "longitude": 174.5859,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1037,
                  "name": "Z Lakeside",
                  "address": "Cnr Northcote Road and Taharoto Road, North Shore",
                  "latitude": -36.7950,
                  "longitude": 174.7395,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.539,
                    "Z91 unleaded": 2.219,
                    "Z Diesel": 2.329
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },{
                  "station_id": 1038,
                  "name": "Z Lincoln Rd",
                  "address": "198 Lincoln Road, Henderson",
                  "latitude": -36.8804,
                  "longitude": 174.6272,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.549,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.329
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1039,
                  "name": "Z Mairangi Bay",
                  "address": "413-417 Beach Road, Mairangi Bay",
                  "latitude": -36.7325,
                  "longitude": 174.7489,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1040,
                  "name": "Z Manly",
                  "address": "934 Whangaparaoa Road, Whangaparaoa",
                  "latitude": -36.6162,
                  "longitude": 174.7692,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.239,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1041,
                  "name": "Z Manurewa",
                  "address": "1 Alfriston Road, Manurewa, South Auckland",
                  "latitude": -37.0231,
                  "longitude": 174.9398,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1042,
                  "name": "Z Matamata",
                  "address": "Cnr Waharoa Road and Peria Road, Matamata",
                  "latitude": -37.7349,
                  "longitude": 175.7797,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.239,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1043,
                  "name": "Z Morrinsville",
                  "address": "202-210 Thames Street, Morrinsville",
                  "latitude": -37.1833,
                  "longitude": 175.6942,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.239,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1044,
                  "name": "Z Mt Albert",
                  "address": "770-774 New North Road, Mount Albert, Auckland",
                  "latitude": -36.8767,
                  "longitude": 174.7162,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.549,
                    "Z91 unleaded": 2.219,
                    "Z Diesel": 2.329
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1045,
                  "name": "Z New Lynn",
                  "address": "62 Rata Street, New Lynn, Auckland",
                  "latitude": -36.9137,
                  "longitude": 174.6915,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1046,
                  "name": "Z Ngaruawahia",
                  "address": "106 Great South Road, Ngaruawahia",
                  "latitude": -37.8857,
                  "longitude": 175.2921,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },{
                  "station_id": 1047,
                  "name": "Z Northcote",
                  "address": "119 Onewa Road, Northcote, Auckland",
                  "latitude": -36.7985,
                  "longitude": 174.7423,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.549,
                    "Z91 unleaded": 2.219,
                    "Z Diesel": 2.329
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1048,
                  "name": "Z Northcross",
                  "address": "847-849 East Coast Road, Northcross, Auckland",
                  "latitude": -36.7222,
                  "longitude": 174.7428,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1049,
                  "name": "Z Ormiston Rd",
                  "address": "8 Ormiston Road, Flat Bush, South Auckland",
                  "latitude": -37.0023,
                  "longitude": 174.9147,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.239,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1050,
                  "name": "Z Otahuhu",
                  "address": "19 Princes Street, Otahuhu, Auckland",
                  "latitude": -37.0208,
                  "longitude": 174.9433,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1051,
                  "name": "Z Pakuranga",
                  "address": "470 Pakuranga Highway, Pakuranga, Auckland",
                  "latitude": -36.9123,
                  "longitude": 174.8910,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1052,
                  "name": "Z Palm Beach",
                  "address": "16 Domain Road, Palm Beach",
                  "latitude": -35.2815,
                  "longitude": 174.8849,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1053,
                  "name": "Z Panmure",
                  "address": "434 Ellerslie Panmure Highway, Mount Wellington, Auckland",
                  "latitude": -36.9234,
                  "longitude": 174.8356,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.239,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1054,
                  "name": "Z Papakura North",
                  "address": "254 Great South Road, Takanini, Auckland",
                  "latitude": -37.0864,
                  "longitude": 174.9168,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.239,
                    "Z Diesel": 2.349
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1055,
                  "name": "Z Point Chev",
                  "address": "1125-1143 Great North Road, Point Chevalier, Auckland",
                  "latitude": -36.8791,
                  "longitude": 174.7164,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.239,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },{
                  "station_id": 1056,
                  "name": "Z Ponsonby",
                  "address": "5-9 Williamson Avenue, Ponsonby, Auckland",
                  "latitude": -36.8641,
                  "longitude": 174.7426,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1057,
                  "name": "Z Porowini",
                  "address": "47 Porowini Avenue, Whangarei",
                  "latitude": -35.7327,
                  "longitude": 174.3217,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1058,
                  "name": "Z Pukekohe",
                  "address": "11 Stadium Drive, Pukekohe",
                  "latitude": -37.2076,
                  "longitude": 174.9325,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1059,
                  "name": "Z Pukete",
                  "address": "Cnr Pukete and Te Rapa Roads, Te Rapa, Hamilton",
                  "latitude": -37.7884,
                  "longitude": 175.2915,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1060,
                  "name": "Z Putaruru",
                  "address": "68-70 Tirau Street, Putaruru",
                  "latitude": -38.2491,
                  "longitude": 175.8684,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1061,
                  "name": "Z Quay St",
                  "address": "27 Quay Street, Auckland",
                  "latitude": -36.8444,
                  "longitude": 174.7735,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.559,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1062,
                  "name": "Z Rotokauri",
                  "address": "Cnr Wairere Drive & Arthur Porter Drive, Hamilton",
                  "latitude": -37.7671,
                  "longitude": 175.3242,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1063,
                  "name": "Z Royal Oak",
                  "address": "700 Mount Albert Road, Royal Oak, Auckland",
                  "latitude": -36.9184,
                  "longitude": 174.7523,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1064,
                  "name": "Z Silverdale",
                  "address": "5 Hibiscus Coast Highway, Silverdale",
                  "latitude": -36.6198,
                  "longitude": 174.6501,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },{
                  "station_id": 1065,
                  "name": "Z Stadium",
                  "address": "26 Mill Street, Hamilton",
                  "latitude": -37.7901,
                  "longitude": 175.2767,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1066,
                  "name": "Z Sunnybrae",
                  "address": "37 Northcote Road, Takapuna",
                  "latitude": -36.7884,
                  "longitude": 174.7485,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1067,
                  "name": "Z Taipa",
                  "address": "570 State Highway 10, Taipa",
                  "latitude": -34.9681,
                  "longitude": 173.3355,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1068,
                  "name": "Z Takanini",
                  "address": "166 Great South Road, Papakura",
                  "latitude": -37.0221,
                  "longitude": 174.9337,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1069,
                  "name": "Z Tauhara",
                  "address": "200 Napier-Taupo Rd, Hilltop, Taupo",
                  "latitude": -38.7273,
                  "longitude": 176.1188,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.609,
                    "Z91 unleaded": 2.269,
                    "Z Diesel": 2.379
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1070,
                  "name": "Z Taupō",
                  "address": "Cnr Titiraupenga Street and Tuwharetoa Street, Taupō",
                  "latitude": -38.6888,
                  "longitude": 176.0749,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.609,
                    "Z91 unleaded": 2.269,
                    "Z Diesel": 2.379
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1071,
                  "name": "Z Te Atatu",
                  "address": "402 Te Atatu Road, Te Atatu, Auckland",
                  "latitude": -36.8693,
                  "longitude": 174.7037,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1072,
                  "name": "Z Te Awamutu",
                  "address": "601 Sloane Street, Te Awamutu",
                  "latitude": -38.0352,
                  "longitude": 175.3633,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1073,
                  "name": "Z Te Irirangi Dr",
                  "address": "136 Dawson Road, Otara, South Auckland",
                  "latitude": -36.9304,
                  "longitude": 174.9186,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.569,
                    "Z91 unleaded": 2.229,
                    "Z Diesel": 2.339
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },{
                  "station_id": 1074,
                  "name": "Z Te Puke",
                  "address": "Cnr Jellicoe Street and King Street, Te Puke",
                  "latitude": -37.4176,
                  "longitude": 176.2904,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1075,
                  "name": "Z Ti Rakau Dr",
                  "address": "284 Ti Rakau Drive, East Tamaki, South Auckland",
                  "latitude": -36.9305,
                  "longitude": 174.8904,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1076,
                  "name": "Z Tom Pearce Dr",
                  "address": "Tom Pearce Drive, Auckland International Airport",
                  "latitude": -37.0022,
                  "longitude": 174.7861,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.609,
                    "Z91 unleaded": 2.269,
                    "Z Diesel": 2.379
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1077,
                  "name": "Z Triangle",
                  "address": "574 Great South Road, Ellerslie, Auckland",
                  "latitude": -36.9168,
                  "longitude": 174.8294,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1078,
                  "name": "Z Waikaraka",
                  "address": "167-171 Neilson Street, Onehunga, Auckland",
                  "latitude": -36.9351,
                  "longitude": 174.7785,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1079,
                  "name": "Z Waikumete",
                  "address": "4155 Great North Road, Glen Eden, Auckland",
                  "latitude": -36.9145,
                  "longitude": 174.6217,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1080,
                  "name": "Z Waiuku",
                  "address": "16 Kitchener Road, Waiuku",
                  "latitude": -37.2388,
                  "longitude": 174.7222,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1081,
                  "name": "Z Warkworth",
                  "address": "1 Hudson Road, Warkworth",
                  "latitude": -36.3864,
                  "longitude": 174.6662,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1082,
                  "name": "Z Whakatane",
                  "address": "Cnr Domain Road and King Street, Whakatane",
                  "latitude": -37.9245,
                  "longitude": 177.1733,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.609,
                    "Z91 unleaded": 2.269,
                    "Z Diesel": 2.379
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },{
                  "station_id": 1083,
                  "name": "Z Whangaparaoa",
                  "address": "651 Whangaparaoa Road, Whangaparaoa",
                  "latitude": -36.6096,
                  "longitude": 174.7849,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1084,
                  "name": "Z Whitianga",
                  "address": "83-85 Albert Street, Whitianga",
                  "latitude": -36.8667,
                  "longitude": 175.6833,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1085,
                  "name": "Z Wiri Station Rd",
                  "address": "83 Wiri Station Road, Manukau City",
                  "latitude": -37.0043,
                  "longitude": 174.8802,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1086,
                  "name": "Z Karaka",
                  "address": "47 Harbourside Drive, Karaka, Auckland 2113",
                  "latitude": -37.0616,
                  "longitude": 174.8642,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1087,
                  "name": "Z Silverdale",
                  "address": "100 Foundry Road, Silverdale",
                  "latitude": -36.6252,
                  "longitude": 174.6669,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1088,
                  "name": "Z Awakeri",
                  "address": "RD2, Whakatane",
                  "latitude": -37.9243,
                  "longitude": 177.1850,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1089,
                  "name": "Z Beach Rd",
                  "address": "150 Beach Road, Auckland",
                  "latitude": -36.8500,
                  "longitude": 174.7667,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1090,
                  "name": "Z Constellation Dr",
                  "address": "36 Constellation Drive, Auckland",
                  "latitude": -36.7393,
                  "longitude": 174.7364,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.579,
                    "Z91 unleaded": 2.249,
                    "Z Diesel": 2.359
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1091,
                  "name": "Z Fairy Springs",
                  "address": "23 Fairy Springs Road, Rotorua",
                  "latitude": -38.1366,
                  "longitude": 176.2704,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.609,
                    "Z91 unleaded": 2.269,
                    "Z Diesel": 2.379
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },{
                  "station_id": 1092,
                  "name": "Z Gisborne service station",
                  "address": "300 Gladstone Road, Gisborne",
                  "latitude": -38.6586,
                  "longitude": 178.0203,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1093,
                  "name": "Z Hamilton",
                  "address": "Corner Lincoln & Edgar Street, Hamilton",
                  "latitude": -37.7734,
                  "longitude": 175.2856,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1094,
                  "name": "Z Harris Rd",
                  "address": "142 Harris Road, Auckland",
                  "latitude": -36.9937,
                  "longitude": 174.8721,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1095,
                  "name": "Z Hewletts Rd",
                  "address": "81 Hewletts Road, Tauranga",
                  "latitude": -37.6881,
                  "longitude": 176.2729,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.609,
                    "Z91 unleaded": 2.269,
                    "Z Diesel": 2.379
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1096,
                  "name": "Z Highbrook",
                  "address": "88 Highbrook Drive, Auckland",
                  "latitude": -36.9492,
                  "longitude": 174.8421,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1097,
                  "name": "Z Lakewood Court",
                  "address": "742 Great South Road, Auckland",
                  "latitude": -37.0033,
                  "longitude": 174.8647,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1098,
                  "name": "Z Maramarua",
                  "address": "State Highway 2, Maramarua",
                  "latitude": -37.2560,
                  "longitude": 175.2205,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1099,
                  "name": "Z Massey North",
                  "address": "Corner State Highway 16 & Asti Lane, Auckland",
                  "latitude": -36.8701,
                  "longitude": 174.6842,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1100,
                  "name": "Z TS Total Transport",
                  "address": "63 Miro Street, Taupo",
                  "latitude": -38.6876,
                  "longitude": 176.0703,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.609,
                    "Z91 unleaded": 2.269,
                    "Z Diesel": 2.379
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },{
                  "station_id": 1101,
                  "name": "Z Ngatea",
                  "address": "77 Orchard West Road, Ngatea",
                  "latitude": -37.3079,
                  "longitude": 175.5443,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1102,
                  "name": "Z Pokeno",
                  "address": "Great South Road, Pokeno",
                  "latitude": -37.2080,
                  "longitude": 175.2227,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1103,
                  "name": "Z Roscommon Rd",
                  "address": "147 Roscommon Rd, Auckland",
                  "latitude": -37.0084,
                  "longitude": 174.8809,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1104,
                  "name": "Z Rotorua",
                  "address": "Sala Street, Rotorua",
                  "latitude": -38.1365,
                  "longitude": 176.2606,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.609,
                    "Z91 unleaded": 2.269,
                    "Z Diesel": 2.379
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1105,
                  "name": "Z Sylvia Park",
                  "address": "510 Mount Wellington Highway, Mount Wellington, Auckland",
                  "latitude": -36.9242,
                  "longitude": 174.8266,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1106,
                  "name": "Z Te Kuiti",
                  "address": "76 Te Kumi Road, Te Kuiti",
                  "latitude": -38.2581,
                  "longitude": 175.2676,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.609,
                    "Z91 unleaded": 2.269,
                    "Z Diesel": 2.379
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1107,
                  "name": "Z TS PATETERE",
                  "address": "Corner State Highway 1 & State Highway 27, Patetere",
                  "latitude": -38.1390,
                  "longitude": 175.8174,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.629,
                    "Z91 unleaded": 2.279,
                    "Z Diesel": 2.389
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1108,
                  "name": "Z Tokoroa",
                  "address": "Browning Street, Tokoroa",
                  "latitude": -38.2100,
                  "longitude": 175.8681,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.629,
                    "Z91 unleaded": 2.279,
                    "Z Diesel": 2.389
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1109,
                  "name": "Z Waharoa",
                  "address": "Factory Road, Waharoa",
                  "latitude": -37.7763,
                  "longitude": 175.6131,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },{
                  "station_id": 1110,
                  "name": "Z Waipapa",
                  "address": "1913 State Highway 10, Waipapa",
                  "latitude": -35.2556,
                  "longitude": 173.9528,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1111,
                  "name": "Z Whangarei",
                  "address": "Kioreroa Road, Whangarei",
                  "latitude": -35.7560,
                  "longitude": 174.3201,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1112,
                  "name": "Z Bombay",
                  "address": "Cnr Mill Road & Great South Road, Bombay",
                  "latitude": -37.1794,
                  "longitude": 174.9350,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1113,
                  "name": "Z Sandringham",
                  "address": "340 Sandringham Road, Auckland",
                  "latitude": -36.8915,
                  "longitude": 174.7379,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.589,
                    "Z91 unleaded": 2.259,
                    "Z Diesel": 2.369
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1114,
                  "name": "Z Kaingaroa Webb Road",
                  "address": "Red Stag Road, Kaingaroa",
                  "latitude": -38.2474,
                  "longitude": 176.7272,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.609,
                    "Z91 unleaded": 2.269,
                    "Z Diesel": 2.379
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                },
                {
                  "station_id": 1115,
                  "name": "Z Morrinsville",
                  "address": "Corner McCrae Street & Main Road, Morrinsville",
                  "latitude": -37.1866,
                  "longitude": 175.7006,
                  "fuel_types": ["ZX Premium", "Z91 unleaded", "Z Diesel"],
                  "services": ["Car wash", "Food & drink", "Pay at pump", "ATM"],
                  "price_per_litre": {
                    "ZX Premium": 2.609,
                    "Z91 unleaded": 2.269,
                    "Z Diesel": 2.379
                  },
                  "station_type": ["Service station"],
                  "opening_hours": {
                    "Monday": "24hrs",
                    "Tuesday": "24hrs",
                    "Wednesday": "24hrs",
                    "Thursday": "24hrs",
                    "Friday": "24hrs",
                    "Saturday": "24hrs",
                    "Sunday": "24hrs"
                  }
                
              
            
    },
);
}
module.exports = createStationList