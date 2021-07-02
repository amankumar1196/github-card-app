import './InputForm.css';
import React, {useState} from 'react'

export default function Card(props) {
  const { submitCallback } = props
  const [githubname, setGithubname] = useState()
  
  const onChangeHandler = (e) => {
    setGithubname(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!githubname) return
    submitCallback(githubname)
    setGithubname("")
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="input" 
          name="githubname"
          value={githubname}
          placeholder="github login"
          onChange={e => onChangeHandler(e)}
          />
        <button type="submit" className="add-button">Add</button>
      </form>
    </div>
  )
}
