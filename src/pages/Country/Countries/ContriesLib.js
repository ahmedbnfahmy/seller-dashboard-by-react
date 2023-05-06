import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { axiosInstance } from "../../../netWork/netWork";

export const getContries = async (setCountries, setFiltered) => {
    axiosInstance.get(`/country/`, {
    }).then((res) => {
        console.log("country", res);
        setCountries(res.data);
        setFiltered(res.data); 
    }).catch((err) => {

    })
}


export const delContries = async (id, countries, setCountries, filtered, setFiltered) => {
    console.log("id: " + id);

    axiosInstance.delete('/country/' + id, {}).then((res) => {
        console.log(res.data);
        removeLocal(id, countries, setCountries, filtered, setFiltered)
    }).catch((err) => {

    })
}

export const updateCountry = async (countries, setCountries, filtered, setFiltered, editRow, setEditRow) => {
    console.log("id: " + editRow._id);

    axiosInstance.put('/country/' + editRow._id, {name: editRow.name, arName: editRow.arName}).then((res) => {
        console.log(res.data);
        updateLocal(countries, setCountries, filtered, setFiltered, editRow, setEditRow)
    }).catch((err) => {

    })
}

export const updateLocal = (countries, setCountries, filtered, setFiltered, editRow, setEditRow) => {
    var result = [];
    countries.forEach(country => {
        result = (country._id == editRow._id) ? [...result, editRow] : result = [...result, country];
    });
    setCountries(result);


    result = [];
    filtered.forEach(country => {
        result = (country._id == editRow._id) ? [...result, editRow] : result = [...result, country];
    });
    setFiltered(result);
    setEditRow('');
}

export const removeLocal = (id, countries, setCountries, filtered, setFiltered) => {
    var result = countries.filter(country => {
        return country._id != id;
    }); 
    setCountries(result);


    result = filtered.filter(country => {
        return country._id != id;
    });
    setFiltered(result);
}

export const  getColumns = (countries, setCountries, filtered, setFiltered, editRow, setEditRow) =>{
    return [
        {
            name: 'Country Name',
            selector: (row) => row._id != editRow._id? row.name : <input 
                className="form-control" 
                type="text" 
                placeholder="Country Name" 
                value={editRow.name}
                onChange={(e)=>{
                    setEditRow({...editRow, name: e.target.value})
                }}
            />,
            sortable: true
        },

        {
            name: 'Caountry Ar',
            selector:  (row) => row._id != editRow._id? row.arName :<input 
                className="form-control" 
                type="text" 
                placeholder="Country Name" 
                value={editRow.arName}
                onChange={(e)=>{
                    setEditRow({...editRow, arName: e.target.value})
                }}
            />,
        },
        {
            name: 'Actions',
            cell: (row) => <>
                <FontAwesomeIcon icon={row._id != editRow._id? "pen-to-square" : "save"} color={row._id != editRow._id? "#666" : "green"} className="editAddIcon fa-2xl" onClick={(e)=>{
                    setEditRow(row)
                    if(row._id == editRow._id){
                        updateCountry(countries, setCountries, filtered, setFiltered, editRow, setEditRow)
                    }
                }}/>
                <FontAwesomeIcon icon="trash-alt" color="#666" className="editAddIcon fa-xl" onClick={()=>{delContries(row._id, countries, setCountries, filtered, setFiltered)}}/>
            </>,
        }
    ];
}

export default getContries;