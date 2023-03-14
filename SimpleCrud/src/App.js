import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function Task() {

  const [itemIndex, setItemIndex] = useState();
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    password: ""
  })


  const onchange = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
    // console.log(formvalue);
  }
  const [data, setData] = useState([]);

  const onsubmit = (e) => {
    e.preventDefault();

    if (formvalue.name == "") {
      document.getElementById("nameerr").innerHTML = "enter name";
    }
    else {
      document.getElementById("nameerr").innerHTML = "";
    }
    if (formvalue.email == "") {
      document.getElementById('emailerr').innerHTML = 'enter email';
    }
    else {
      document.getElementById('emailerr').innerHTML = '';
    }
    if (formvalue.password == "") {
      document.getElementById('passerr').innerHTML = 'enter password';
    }
    else {
      document.getElementById('passerr').innerHTML = '';
      setData([...data, formvalue]);

      setFormvalue({ name: "", email: "", password: "" });
    }
  }


  const ondelete = (id) => {
    window.confirm('Are you sure want to delete');
    const filterablelist = data.filter((item) => item.id != id)
    setData(filterablelist)
  }

  const [formvalue2, setFormvalue2] = useState([]);
  const onEdit = (item, pos) => {
    setItemIndex(pos);
    setFormvalue2({ name: item.name, email: item.email, password: item.password })

  }

  const onchangeeee = (e) => {
    setFormvalue2({ ...formvalue2, id: new Date().getTime().toString(), [e.target.name]: e.target.value })
    // console.log(formvalue);
  }

  const updateHandle = () => {
    const newlist = [...data];
    const newPos = newlist[itemIndex];
    console.log(newPos);
    newPos.name = formvalue2.name;
    newPos.email = formvalue2.email;
    newPos.password = formvalue2.password;
    setData(newlist);
  }

  return (
    <div className='container mt-3'>
      <h2>form</h2>
      <form action='' method='post'>
        <div className='mb-3 mt-3'>
          <label htmlFor='name'>name:</label>
          <input type='text' className='form-control' id='name' value={formvalue.name} placeholder="name" onChange={onchange} name="name"></input>
          <span style={{ color: 'red' }} id='nameerr'></span>
        </div>
        <div className='mb-3 mt-3'>
          <label htmlFor='email'>email:</label>
          <input type='email' className='form-control' id='email' value={formvalue.email} placeholder="email" onChange={onchange} name="email"></input>
          <span style={{ color: 'red' }} id='emailerr'></span>
        </div>
        <div className='mb-3 mt-3'>
          <label htmlFor='pwd'>password:</label>
          <input type='password' className='form-control' id='password' value={formvalue.password} placeholder="password" onChange={onchange} name="password"></input>
          <span style={{ color: 'red' }} id='passerr'></span>
        </div>
        <button type='submit' onClick={onsubmit} className="btn btn-primary">submit</button>
      </form>
      <hr />
      <h1 className='text-center'>All data</h1>
      <table className='table'>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>password</th>
          <th>Edit</th>
          <th>delete</th>
        </tr>
        {
          data.map((item, index, ent) => {
            const { id, name, email, password } = item;
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td><Button variant="info" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => onEdit(item, index)}>Edit</Button></td>
                <td><Button variant="danger" onClick={() => ondelete(id)} style={{ color: 'black' }} >Delete</Button></td>
              </tr>
            )
          })

        }
      </table>

      <div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <label htmlFor='name'>name:</label>
                <input type='text' className='form-control' id='name' value={formvalue2.name} placeholder="name" onChange={onchangeeee} name="name"></input>
                <label htmlFor='email'>email:</label>
                <input type='email' className='form-control' id='email' value={formvalue2.email} placeholder="email" onChange={onchangeeee} name="email"></input>
                <label htmlFor='pwd'>password:</label>
                <input type='password' className='form-control' id='password' value={formvalue2.password} placeholder="password" onChange={onchangeeee} name="password"></input>
              </div>
              <div className="modal-footer">
                <Button variant="danger" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => updateHandle()} >Update</Button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
