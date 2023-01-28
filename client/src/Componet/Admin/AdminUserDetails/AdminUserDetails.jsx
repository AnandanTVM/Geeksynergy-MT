import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { deleteClient, getAllClientDetails } from '../../../axios/serives/adminsevices';



function AdminUserDetails() {
    const navigate = useNavigate();
    const [details, SetDetails] = useState();

    async function fetchData() {
        const token = localStorage.getItem('Admintoken');
        const data = await getAllClientDetails(token);
        SetDetails(data.details);
    }
    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
        },
        {
            name: 'Phome',
            selector: (row) => row.phone,
        },

        {
            name: 'Edit Details',
            selector: (row) => {
                return (
                    <div>
                        {' '}
                        <button
                            className="btn btn-info"
                            onClick={() => {
                                navigate(`/admin/adminEdit/${row._id}`);
                            }}
                        >
                            More Details
                        </button>
                    </div>
                );
            },
        },

        {
            name: 'Delete',
            selector: (row) => {
                return (
                    <div>
                        {' '}
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteuser(row._id)}
                        >
                            Delete
                        </button>
                    </div>
                );
            },
        },
    ];
    const deleteuser = async (id) => {
        const token = localStorage.getItem('Admintoken');
        let data = await deleteClient(token, id).then(()=> fetchData())


    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div><div className="container">
            <div className="row mt-4">
                <h1> User Informations</h1>
            </div>
            <DataTable
                columns={columns}
                data={details}
                fixedHeader
                fixedHeaderScrollHeight="500px"
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                pagination
            />
        </div></div>
    )
}

export default AdminUserDetails