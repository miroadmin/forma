import React, { useEffect, useState, } from 'react';
import './style.css';

const User = () => {

    const today = () => {
        const datum=new Date();
        const separator='-';
        const den=datum.getDate();
        const mesiac=datum.getMonth() + 1;
        const rok = datum.getFullYear();
        return `${rok}${separator}${mesiac<10?`0${mesiac}`:`${mesiac}`}${separator}${den}`
    }

    const [formData, setData] = useState({name:{
                                            element:'input',
                                            value:'Miro',
                                            label:true,
                                            labelText:'Name 5 znakov',
                                            config:{name:'name_input',
                                                    type:'text',
                                                    placeholder:'Enter your name'
                                                    },
                                            validation:{
                                                required:true,
                                                minLen:5
                                            },
                                            valid: false,
                                            touched:false,
                                            validationMessage:''
                                            },

                                        last:{
                                                element:'input',
                                                value:'',
                                                label:true,
                                                labelText:'Last Name',
                                                config:{name:'last_input',
                                                        type:'text',
                                                        placeholder:'Enter your last name'
                                                        },
                                                validation:{
                                                    required:false
                                                },
                                                valid: true,
                                                touched:false,
                                                validationMessage:''
                                                },

                                        message:{
                                                element:'textarea',
                                                value:'',
                                                label:true,
                                                labelText:'Message',
                                                config:{name:'message_input',
                                                        rows:4,
                                                        colos:36
                                                        },
                                                validation:{
                                                    required:false
                                                },
                                                valid: true,
                                                touched:false,
                                                validationMessage:''
                                                },

                                        age:{
                                                    element:'select',
                                                    value:'35',
                                                    label:true,
                                                    labelText:'Vek',
                                                    config:{name:'age_input',
                                                            type:'number',
                                                            option:[
                                                                {val:'1',text:"10-20"},
                                                                {val:'2',text:"20-30"},
                                                                {val:'3',text:"30-40"}
                                                            ]
                                                            },
                                                    validation:{
                                                        required:false
                                                    },
                                                    valid: true,
                                                    touched:false,
                                                    validationMessage:''
                                                    },
                                        datum:{
                                                    element:'input',
                                                    value:today(),
                                                    label:true,
                                                    labelText:'Datum',
                                                    config:{name:'datum_input',
                                                            type:'date',
                                                            placeholder:'Datum'
                                                            },
                                                    validation:{
                                                        required:false
                                                    },
                                                    valid: true,
                                                    touched:false,
                                                    validationMessage:''
                                                    },
                                        });
                                    

            
    
    const save= (event) => {
        event.preventDefault();
        let dataToSubmit ={};
        let formIsValid=true;

        for (let key in formData) {
            if (key!=='newState') {
            dataToSubmit[key] = formData[key].value;
            }
        }
        for (let key in formData) {
            if( !formData[key].valid && key!=='newState') {formIsValid=false}; 
        }
        if (formIsValid) {
             console.log(dataToSubmit)
        }
    

 
    }


    const updateData = (newState) => {
        console.log('Tady');
        console.log(formData);
        setData(previousState => {
          return { ...previousState, newState }
        });
        // setData({formData:[...formData.slice(0,newState), ...formData.slice(newState+1)]}) ;
        // console.log(formData);
      }

     return(
            <>
                <div className='container'>
                    <form onSubmit={save}>
                        <FormFields 
                            formData= {formData}
                            onBlur={(newState) => updateData(newState)}
                            change={(newState) => updateData(newState)}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </div>    
   
            </>
        )
}

const FormFields = (props) => {
    const  renderFields = () => {
            const formArray=[];
            for(let elementName in props.formData) {
                formArray.push({
                    id: elementName,
                    settings:props.formData[elementName]
                })
            }
            return formArray.map ( (item,i) => {
                return (
                    <div key= {i} className="form_element">
                        {renderTemplates(item)}
                    </div>
                )
            })
    }

    const showLabel = (show, label) => {
        return ( show ? 
            <label> {label} </label> : null
        )
    }

    const changeHandler  = (e,id, blur) => {
        const newState = props.formData;
        newState[id].value=e.target.value;
        if(blur) {
        let validData= validate(newState[id]);
        newState[id].valid=validData[0];
        newState[id].validationMessage=validData[1];
        }
        newState[id].touched = blur;
        props.change(newState);
    }
    const validate = (element) => {

        let error=[true,''];
        if(element.validation.minLen) {
            const valid= element.value.length >= element.validation.minLen;
            const message = `${ !valid ? 'Must be greater than '+ element.validation.minLen : ''}`;
            error =!valid ?[valid,message]:error
        }
        if (element.validation.required) {
            const valid = element.value.trim() !== '';
            const message = `${ !valid ? 'This field is required' : ''}`

            error =!valid ?[valid,message]:error
        }
        return error;
    }

    const showValidation= (data) => {
        let errorMessage=null;
        if(data.validation && !data.valid) {

            errorMessage = (
                <div className="label_error">
                    {data.validationMessage}
                </div>
            )
        }
        return errorMessage;
    }

    const renderTemplates = (data) => {
        let formTemplate = '';
        let values = data.settings;
        switch (values.element) {
            case('input') :
                formTemplate = (
                    <div>
                        {showLabel(values.label,values.labelText)}
                        <input
                            {...values.config} 
                            value={values.value}
                            onBlur= { (e) => changeHandler(e,data.id,true)}
                            onChange = { (e) => changeHandler(e,data.id,false)}
                            />
                            {showValidation(values)}    
                    </div>  
         
            )
                break;

            case('textarea') :
                formTemplate = (
                     <div>
                        {showLabel(values.label,values.labelText)}
                        <textarea
                            {...values.config} 
                            value={values.value}
                            onChange = { (e) => changeHandler(e,data.id)}
                            />
                    </div>               
                )
                    break;
 
             case('select') :
                formTemplate = (
                         <div>
                            {showLabel(values.label,values.labelText)}
                            <select
                                value={values.value}
                                name={values.config.name}
                                onChange = { (e) => changeHandler(e,data.id)}
                            >
                            {values.config.option.map((item,i) => (
                                <option key={i} value={item.val}>
                                        {item.text}
                                </option>
                            ))}
                            </select>
                        </div>               
                )
                    break;
                                           
            default:
                formTemplate = null;    
        }
        return formTemplate;
    }

    return(
        <div>
            {renderFields()}
        </div>

    )
}

export default User;