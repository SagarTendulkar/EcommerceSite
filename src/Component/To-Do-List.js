import React, { useState } from 'react'

function ToDOList() {
    const [text,setText] = useState("")
    const [list,setList] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }
    const handleAdd = () => {
        if (text.trim() !== '') {
            setList([...list, text])
            setText('')
          }
    }

    return (
        <div className='row d-flex justify-content-center'>
            <h2 className='text-center'>To-Do List</h2>
            <div className="col-md-5 border border-2 m-3">
                <div className="input-group my-3">
                    <input type="text" className="form-control" onChange={handleChange} />
                    <button className="btn btn-outline-secondary" type="button" onClick={handleAdd}>Add</button>
                </div>
                <h4>Lists:</h4>
                {/* <textarea className='form-control mb-3' rows="8" value ></textarea> */}
                <textarea className='form-control mb-3' rows="8" value={list.map(item => "- " + item).join('\n')}></textarea>
            </div>
            <div className="col-md-5 border border-2 m-3">
            </div>
        </div>
    )
}

export default ToDOList