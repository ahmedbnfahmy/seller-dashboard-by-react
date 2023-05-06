import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { axiosInstance } from "../../netWork/netWork";

export const getData = async (setData, setFiltered) => {
    axiosInstance.get(`/city`, {
    }).then((res) => {
        setData(res.data);
        setFiltered(res.data); 
    }).catch((err) => {

    })
}


export const delData = async (id, data, setData, filtered, setFiltered) => {
    console.log("id: " + id);

    axiosInstance.delete('/city/' + id, {}).then((res) => {
        console.log(res.data);
        removeLocal(id, data, setData, filtered, setFiltered)
    }).catch((err) => {

    })
}

export const updateData = async (data, setData, filtered, setFiltered, editRow, setEditRow) => {
    axiosInstance.put('/city/' + editRow._id, {
        name: editRow.name, 
        arName: editRow.arName,
        governateName: editRow.governateName,
        arGovernateName: editRow.arGovernateName,
    }).then((res) => {
        updateLocal(data, setData, filtered, setFiltered, editRow, setEditRow)
    }).catch((err) => {

    })
}

export const updateLocal = (data, setData, filtered, setFiltered, editRow, setEditRow) => {
    var result = [];
    data.forEach(item => {
        result = (item._id == editRow._id) ? [...result, editRow] : result = [...result, item];
    });
    setData(result);


    result = [];
    filtered.forEach(item => {
        result = (item._id == editRow._id) ? [...result, editRow] : result = [...result, item];
    });
    setFiltered(result);
    setEditRow('');
}

export const removeLocal = (id, data, setData, filtered, setFiltered) => {
    var result = data.filter(item => {
        return item._id != id;
    }); 
    setData(result);


    result = filtered.filter(item => {
        return item._id != id;
    });
    setFiltered(result);
}

export const  getColumns = (data, setData, filtered, setFiltered, editRow, setEditRow) =>{
    return [
        {
            name: 'City Name',
            selector: (row) => row._id != editRow._id? row.name : <input 
                className="form-control" 
                type="text" 
                placeholder="City Name" 
                value={editRow.name}
                onChange={(e)=>{
                    setEditRow({...editRow, name: e.target.value})
                }}
            />,
            sortable: true
        },

        {
            name: 'City Ar',
            selector:  (row) => row._id != editRow._id? row.arName :<input 
                className="form-control" 
                type="text" 
                placeholder="City Name" 
                value={editRow.arName}
                onChange={(e)=>{
                    setEditRow({...editRow, arName: e.target.value})
                }}
            />,
        },

        {
            name: 'Government',
            selector:  (row) => row._id != editRow._id? row.governateName :<input 
                className="form-control" 
                type="text" 
                placeholder="Government Name" 
                value={editRow.governateName}
                onChange={(e)=>{
                    setEditRow({...editRow, governateName: e.target.value})
                }}
            />,
        },

        {
            name: 'Government Ar',
            selector:  (row) => row._id != editRow._id? row.arGovernateName :<input 
                className="form-control" 
                type="text" 
                placeholder="Government Ar" 
                value={editRow.arGovernateName}
                onChange={(e)=>{
                    setEditRow({...editRow, arGovernateName: e.target.value})
                }}
            />,
        },

        {
            name: 'Actions',
            cell: (row) => <>
                <FontAwesomeIcon icon={row._id != editRow._id? "pen-to-square" : "save"} color={row._id != editRow._id? "#666" : "green"} className="editAddIcon fa-2xl" onClick={(e)=>{
                    setEditRow(row)
                    if(row._id == editRow._id){
                        updateData(data, setData, filtered, setFiltered, editRow, setEditRow)
                    }
                }}/>
                <FontAwesomeIcon icon="trash-alt" color="#666" className="editAddIcon fa-2xl" onClick={()=>{delData(row._id, data, setData, filtered, setFiltered)}}/>
            </>,
        }
    ];
}

export default getData;