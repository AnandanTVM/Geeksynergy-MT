import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { getProfile } from '../../../axios/serives/clientsevices';

function ClientDetails() {
  // const navigate = useNavigate();
  const [details, SetDetails] = useState();

  async function fetchData() {
    const token = localStorage.getItem('token');
    const data = await getProfile(token);

    let d = [];
    d.push(data.profile);
    SetDetails(d);
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
    // {
    //   name: 'Block/Unblock',
    //   selector: (row) => {
    //     return (
    //       <div>
    //         {' '}
    //         {row.block ? (
    //           <button
    //             className="btn btn-danger"
    //             onClick={() => unBlock(row._id)}
    //           >
    //             Un Block
    //           </button>
    //         ) : (
    //           <button className="btn btn-danger" onClick={() => Block(row._id)}>
    //             Block
    //           </button>
    //         )}
    //       </div>
    //     );
    //   },
    // },
    // {
    //   name: 'View More',
    //   selector: (row) => {
    //     return (
    //       <div>
    //         {' '}
    //         <button
    //           className="btn btn-info"
    //           onClick={() => {
    //             navigate(`/adminClientEdit/${row._id}`);
    //           }}
    //         >
    //           More Details
    //         </button>
    //       </div>
    //     );
    //   },
    // },
  ];
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="container">
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
      </div>
    </div>
  );
}

export default ClientDetails;
