import React from 'react'

export default function GenderCheckBox({onGenderCheckboxChange,selectedGender}) {
  return (
    <div className='flex'>
       <div className="form-control">
           <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected" : ""}`}>
              <span className="label-text">
                Male
              </span>
              <input
                  type="checkbox"
                  onChange={()=>onGenderCheckboxChange("male")}
                  checked={selectedGender==="male"}
                  className='checkbox border-slate-900'/>
           </label>
       </div>
       <div className="form-control">
           <label className={`label gap-2 cursor-pointer ${selectedGender==="male" ? "selected" : ""}`}>
              <span className="label-text">
                Female
              </span>
              <input
                  type="checkbox"
                  onChange={()=>onGenderCheckboxChange("female")}
                  checked={selectedGender==="female"}
                  className='checkbox border-slate-900'/>
           </label>
       </div>
    </div>
  )
}
