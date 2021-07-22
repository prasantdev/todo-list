import React from 'react'

export const Addtodos = () => {
    const submit = () => {
        
    }
    return (
        <div className='container'>
            <h3 className='my-3'>Add Todos</h3>
           <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="text"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-success">Submit</button>
</form> 
        </div>
    )
}
