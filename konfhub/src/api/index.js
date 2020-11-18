import { common } from '@material-ui/core/colors';
import axios from 'axios';
// import { response } from "./konfhub"

const url = 'https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences';


export const fetchData = async () => {
    try {
        // console.log(konf_data)
        const response = await axios.get(url);
        // console.log("Response")
        // console.log(response)

        const paid_confs = response.data.paid
        const free_confs = response.data.free
        
        const confs = [...paid_confs, ...free_confs];
        // console.log(paid_confs)

        var conf_list = []
        for(var x in confs){
            // console.log(x)
            var conf_data = {
                confName : confs[x].confName,
                city: confs[x].city,
                country: confs[x].country,
                entryType: confs[x].entryType,
                imageURL: confs[x].imageURL.replace(/['"]+/g, '', ),
                confStartDate: confs[x].confStartDate
            }
            conf_list.push(conf_data)
        }
        console.log(conf_list)
        return {
            conferences : conf_list
        };
    } catch (error) {

    }
}   