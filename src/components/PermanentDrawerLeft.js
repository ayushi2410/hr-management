import M from 'materialize-css';
export default function PermanentDrawerLeft() {
  return (
    <div className="aside_wrap">
    <ul className="list_snb">
     <li className="w-100 white-text"><a href="#"className="white-text">Dashboard</a></li>
     <li className="w-100 white-text"><a href="#" className="white-text">Add Employee</a></li>
     <li className="w-100 white-text"><a href="#"className="white-text">General Management</a></li> 
     <li className="w-100 white-text"><a href="#"className="white-text">Leaves</a></li>
     <li className="w-100 white-text"><a href="#"className="white-text">Add user</a></li>
     <li className="w-100 white-text"><a href="#"className="white-text">Generate reports</a></li>
     <li className="w-100">
    <img className="img_day" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREQjxnQMsJXKtywz_TK8lk0jYvOPNSrhrq8w&usqp=CAU" alt="good day"/>
     </li>
     </ul>
    </div>
  );
}