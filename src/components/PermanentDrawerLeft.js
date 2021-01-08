import M from 'materialize-css';
export default function PermanentDrawerLeft() {
  return (
    <div className="container-fluid darken-1 blue-grey col drawer w-100">
     <div className="w-100 white-text">Dashboard</div>
     <div className="w-100 white-text">Add Employee</div>
     <div className="w-100 white-text">General Management</div> 
     <div className="w-100 white-text">Leaves</div>
     <div className="w-100 white-text">Add user</div>
     <div className="w-100 white-text">Generate reports</div>
    </div>
  );
}