import bitpastel from '../public/assets/bitpastel.png'
import { useState, useEffect } from 'react'
import { db } from '@components/Firebase-config'
import Skateboard from '../public/assets/Skateboarding (1).gif'
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc, 
  updateDoc,
  deleteDoc ,
  onSnapshot
} from 'firebase/firestore/lite'
// import {collection, addDoc } from "firebase/firestore";
import $ from 'jquery'
// import { display } from '@mui/system'
import {  FiAlertCircle } from 'react-icons/fi';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
// import { isObject } from 'cypress/types/lodash'
export default function Home () {
  const [inputValue, setInputValue] = useState({
    cv: null,
    // textChange1: '',
    job_title: '',
    sub_title: '',
    job_url: '',
    experience: '',
    location: '',
    technical_skill: '',
    soft_skill: '',
    desired_skill: '',
    status:"Active"
  })
  const [idObject,setIdObject]=useState([{a:1},{actionOnly:"add"},{idD:1234}])
  const [onlyData, setOnlyData] = useState([])
  const [formerror, setFormError] = useState({})

  const [isSubmit, setIsSubmit] = useState(false)
  // const [input,setInput]=useState([])
  const [checker, setChecker] = useState(false)
  const [navData, setNavData] = useState({ action1: 'showAllData' })
  const showData = e => {
    // $('#group').css('text-decoration','none')
    // $('#group').css('border-bottom-style','none')

    $('#listData').addClass('activeonly')
    $('#newData').removeClass('activeonly')
    $('#newData').addClass('activeCursor')

    setNavData({ action1: 'showAllData' })
  }
  const addData = e => {
    // $('#indiv').css('text-decoration','none')
    // $('#group').css('text-decoration','underline')
    $('#newData').addClass('activeonly')
    $('#listData').removeClass('activeonly')
    $('#listData').addClass('activeCursor')
    // $('#group').css('border-bottom','1px solid white')
    // $('#group').css({borderBottom:'1px solid white',cursor:'none'})

    setIdObject([{a:1},{actionOnly:"add"},{idD:1234}])

    setNavData({ action1: 'addAllData' })
  }



  const changeBt = e => {
    console.log(e)
    const { name, value } = e.target

    // console.log(e.target.files[0],"kkkkkkk")
    console.log(name, value, 'kolllllllll')
    setInputValue({
      ...inputValue,

      [name]: value
    })
    console.log(inputValue, 'inputvalueeee')
  }

  useEffect(() => {

console.log(idObject,"print it")
const  dataFiltered=idObject
if(dataFiltered.length>0){

if(dataFiltered[1].actionOnly=="EDIT"){
  console.log("EDIT","EDITTT")

    setInputValue({
      ...inputValue,

      job_title: dataFiltered[0].jobTitle,
      sub_title: dataFiltered[0].subTitle,
      job_url: dataFiltered[0].jobUrl,
      experience: dataFiltered[0].experience,
      location: dataFiltered[0].location,
      technical_skill: dataFiltered[0].technicalSkill,
      soft_skill: dataFiltered[0].softSkill,
      desired_skill: dataFiltered[0].desiredSkill,
      status:dataFiltered[0].status
    })
  }



  else if(dataFiltered[1].actionOnly=="DELETE"){
$("#imageParent").css("display","block")
$("section").css("display","none")

    console.log("deleted")
    async function deleteData (db) {
    const delete123=await deleteDoc(doc(db, "12345", `${idObject[2].idD}`));
  return deleteData
    }

const deleted=deleteData(db)
if(deleted){
  setTimeout(()=>
  showData(),100)
}




  }



  else if(dataFiltered[1].actionOnly=="add"){

setInputValue({


  cv: null,
  // textChange1: '',
  job_title: '',
  sub_title: '',
  job_url: '',
  experience: '',
  location: '',
  technical_skill: '',
  soft_skill: '',
  desired_skill: '',
  status:'Active'

})

  }


}
  }, [idObject])

  //  const dataOrg = data.docs.map(doc => doc.data())

  useEffect(() => {
    // $("#imageParent").css("display","block")
    $("section").css("display","none")
  
    console.log("inner")
    async function getData (db) {
      const citiesCol = collection(db, '12345')
      const data = await getDocs(citiesCol)

      console.log(data, 'firebaseData')

      const dataOrg = data.docs.map(doc => {
        let original = doc.data()
        // $("#imageParent").css("display","none")
        // console.log("wating...")
        // $("section").css("display","block")

        return Object.assign(original, { id_: doc.id })
      })
      $("section").css("display","block")
           $("#imageParent").css("display","none")
      setOnlyData(dataOrg)
    }
    getData(db)
  }, [navData])

  // ......add document with auto generated id....

  // useEffect(() => {
  //   async function addData (db) {
  //     const docRef = await addDoc(collection(db, "admin_testing"), {
  //       jobTitle:inputValue.job_title,
  //       subTitle:inputValue.sub_title,
  //       jobUrl:inputValue.job_url,
  //       experience:inputValue.experience,
  //       location:inputValue.location,
  //       technicalSkill:inputValue.technical_skill,
  //       softSkill:inputValue.soft_skill,
  //       desiredSkill:inputValue.desired_skill
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   }
  //   addData(db)
  // }, [])
  useEffect(() => {
    if (Object.keys(formerror).length === 0 && isSubmit) {
      
        if(idObject[1].actionOnly!="EDIT" && navData.action1 == 'addAllData'){

console.log(inputValue,"addd")
      async function addData (db) {
        const docRef = await addDoc(collection(db, '12345'), {
          jobTitle: inputValue.job_title,
          subTitle: inputValue.sub_title,
          jobUrl: inputValue.job_url,
          experience: inputValue.experience,
          location: inputValue.location,
          technicalSkill: inputValue.technical_skill,
          softSkill: inputValue.soft_skill,
          desiredSkill: inputValue.desired_skill,
          status:inputValue.status
        })
        return(docRef.id)
      }


      let addDetail=addData(db)
      if(addDetail){
        console.log(addDetail,"addDetail")
        setTimeout(()=>
        showData(),500)
        
      }

    }
      else{
      async function editData (db) {
        console.log(idObject[2].idD,"idD")

      const washingtonRef = doc(db, "12345", `${idObject[2].idD}`);

      // Set the "capital" field of the city 'DC'
    const  lol=await updateDoc(washingtonRef, {
        jobTitle: inputValue.job_title,
        subTitle: inputValue.sub_title,
        jobUrl: inputValue.job_url,
        experience: inputValue.experience,
        location: inputValue.location,
        technicalSkill: inputValue.technical_skill,
        softSkill: inputValue.soft_skill,
        desiredSkill: inputValue.desired_skill,
        status:inputValue.status

        }
        
      
    
      );
      return lol
      
    }
    let edited=editData(db)
    
    if (edited){
      setTimeout(()=>
     showData(),500)
    }
  }



    }
  }, [formerror])
  const handleClick = e => {
    console.log('form this')
    e.preventDefault()

    setFormError(validate(inputValue))
    console.log(formerror, 'formError')

    setIsSubmit(true)
  }
  const validate = values => {
    const error = {}

    const regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const regxPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    const regxName = /^[A-Za-z\s]+$/

    const pass_regx = /[0-9]/gm

    // if (!values.name) {
    //   error.Name = 'Please Enter A Name !'
    // } else if (!regxName.test(values.name)) {
    //   error.Name = 'Name must have only characters !'
    // }

    // if (!values.email) {
    //   error.Email = 'Please Enter An Email !'
    // } else if (!regxEmail.test(values.email)) {
    //   error.Email = 'Please enter a valid email (i.e user@gmail.com) !'
    // }

    // if (!values.phone) {
    //   error.Phone = 'Please Enter A Phone No !'
    // } else if (!regxPhone.test(values.phone)) {
    //   error.Phone = 'Phone no must be of 10 digits !'
    // }

    // if (!values.current_location) {
    //   error.Current_location = 'Please enter your location !'
    // }
    // if (!values.cv) {
    //   error.Cv = 'Please upload your cv !'
    // }

    return error
  }

  const [deleteObject,setDeleteObject]=useState([])
  function myHandle (e) {
    console.log(e)
    // console.log($('#sampleorder option:selected').data-amount);
    // console.log(e.target[e.target.selectedIndex].getAttribute('data-amount'))
    // console.log(e.target.innerHTML.innerText)
    // const selectElement = document.querySelector('#sampleorder');
    // console.log(Object.entries(e.target.value))

    // for (let [key, value] of Object.entries(e.target.value)) {
    //   console.log(`${key}: ${value}`);
    const action = e.target[e.target.selectedIndex].getAttribute('data-amount')
    // }
    const setId = e.target.value

    const dataFiltered = onlyData.filter(arr => arr.id_ == setId)
    dataFiltered.push({actionOnly:action})
    dataFiltered.push({idD:setId})
    if(action=="EDIT"){
    console.log(dataFiltered)
    setIdObject(dataFiltered)

    setNavData({action1:"addAllData"})
    }
    else if(action=="DELETE"){
          $(".third-sec").css("filter","blur(2px)")
          $("body").css("background","rgba(0,0,0,.5)")
          $("third-sec").css("background","rgba(0,0,0,.5)")
    $(".pop-up").css("display","block")
    setDeleteObject(dataFiltered)


    }
    // $(".backgrounddd").css("filter","blur(2px)")
    // $(".pop-up").css("display","block")


    // $(".pop-up").css("display","none")
    // $(".backgrounddd").css("filter","blur(0px)")


  }
  const deleteOn=()=>{

   
        $(".pop-up").css("display","none")
    $(".third-sec").css("filter","blur(0px)")
    $(".third-sec").css("background","transparent")
    $("body").css("background","transparent")
    setIdObject(deleteObject)


  }
  const deleteOff=()=>{
    $(".pop-up").css("display","none")
    $(".third-sec").css("filter","blur(0px)")
    $(".third-sec").css("background","transparent")
    $("body").css("background","transparent")

  }

  const activeChange=(e)=>{

    
    console.log(checker,"checkerOnly")
  const adId=e.target.id
  const dataFiltered = onlyData.filter(arr => arr.id_ == adId)
  const originalData=dataFiltered[0]
  console.log(e.target.innerText,"innerText")
if(e.target.innerText=="Active"){
  console.log(e.target.innerText,"diidActive")

  Object.assign(originalData,{status:"InActive"})
  console.log(originalData,"originalllldidactive")
  
  // setInputValue({...inputValue,status:"InActive"})
  setChecker(true)
  console.log(checker,"do")

}
else if(e.target.innerText=="InActive"){
  console.log(e.target.innerText,"diidd")
 

  // setInputValue({...inputValue,status:"Active"})
  Object.assign(originalData,{status:"Active"})
  console.log(originalData,"originallll")
  setChecker(true)
  console.log(checker,"do")

}
console.log(checker,"checkerOnly12")

if(checker){
  console.log(checker,"checkerOnly12")
async function editData (db) {
 

const washingtonRef = doc(db, "12345", `${adId}`);

// Set the "capital" field of the city 'DC'
const  lol=await updateDoc(washingtonRef, {
  jobTitle: originalData.jobTitle,
  subTitle: originalData.subTitle,
  jobUrl: originalData.jobUrl,
  experience: originalData.experience,
  location: originalData.location,
  technicalSkill: originalData.technicalSkill,
  softSkill: originalData.softSkill,
  desiredSkill: originalData.desiredSkill,
  status:originalData.status

  }
  


);
return lol

}
let edited=editData(db)

if (edited){

  console.log(edited)
setTimeout(()=>


showData(),500)
}
}

















  }

  return (
    <>
      <main id='Main'>
        <nav id='Nav'>
          <a href='#' id='Nav-logo'></a>

          <ul className='ul' id='uls'>
            <li>
              <div className='photo-div'>
                <a className='photo-a'>
                  <img src={bitpastel.src} className='image-last' />
                </a>
              </div>
            </li>

            {/* <i className="fa fa-times" onclick="hideMenu()" > </i>  */}
            <li className='li-item'>
              <a id='newData' onClick={addData}>
                Add New Job
              </a>
            </li>
            <li className='li-item'>
              <a id='listData' onClick={showData}>
                Job List
              </a>
            </li>
          </ul>

          {/* <i className="fa fa-bars" id="fa__" style="color:white" onclick="showMenu()"></i> */}
        </nav>
      </main>
      <div id='imageParent' className="loadingParent">
          <img src={Skateboard.src} alt='Loading ....' />
        </div>
      {navData.action1 == 'addAllData' && (
        <section className='sec-section'>
          <div className='text-left'>{
(idObject[1].actionOnly=="EDIT")?(

            <h2>Update Job Detail</h2>):(<h2>Join Our Team</h2>)}
          
          </div>
          <form onSubmit={handleClick} autocomplete='off'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 relativeError  '>
                <label htmlFor='job_title' style={{ marginTop: '15px' }}>
                  Job Title
                </label>

                <input
                  type='text'
                  className='form-controller'
                  id='job_title'
                  name='job_title'
                  value={inputValue.job_title}
                  // placeholder='Name*'
                  onChange={changeBt}
                  // onKeyDown={() => {
                  //   setFormError({ ...formerror, Name: '' })
                  // }}
                />
              </div>
              <div className='col-lg-12 col-md-12 relativeError '>
                <label htmlFor='sub_title'>Sub Title</label>

                <input
                  type='text'
                  className='form-controller'
                  id='sub_title'
                  name='sub_title'
                  value={inputValue.sub_title}
                  // placeholder='Name*'
                  onChange={changeBt}
                  // onKeyDown={() => {
                  //   setFormError({ ...formerror, Name: '' })
                  // }}
                />
              </div>
              <div className='col-lg-12 col-md-12 relativeError '>
                <label htmlFor='job_url'>Job URL</label>

                <input
                  type='text'
                  className='form-controller'
                  id='job_url'
                  name='job_url'
                  value={inputValue.job_url}
                  onChange={changeBt}
                  // onKeyDown={() => {
                  //   setFormError({ ...formerror, Name: '' })
                  // }}
                />
              </div>
              <div className='col-lg-12 col-md-12 relativeError '>
                <label htmlFor='experience'>Experience</label>

                <input
                  type='text'
                  className='form-controller'
                  id='experience'
                  name='experience'
                  value={inputValue.experience}
                  // placeholder='Name*'
                  onChange={changeBt}
                  // onKeyDown={() => {
                  //   setFormError({ ...formerror, Name: '' })
                  // }}
                />
              </div>
              <div className='col-lg-12 col-md-12 relativeError '>
                <label htmlFor='location'>Location</label>

                <input
                  type='text'
                  className='form-controller'
                  id='location'
                  name='location'
                  value={inputValue.location}
                  // placeholder='Name*'
                  onChange={changeBt}
                  // onKeyDown={() => {
                  //   setFormError({ ...formerror, Name: '' })
                  // }}
                />
              </div>
              <div className='col-lg-12 col-md-12 relativeError '>
                <label htmlFor='technical_skill'>Technical Skill</label>

                <input
                  type='text'
                  className='form-controller'
                  id='technical_skill'
                  name='technical_skill'
                  value={inputValue.technical_skill}
                  // placeholder='Name*'
                  onChange={changeBt}
                  // onKeyDown={() => {
                  //   setFormError({ ...formerror, Name: '' })
                  // }}
                />
              </div>
              <div className='col-lg-12 col-md-12 relativeError '>
                <label htmlFor='soft_skill'>Soft Skill</label>

                <input
                  type='text'
                  className='form-controller'
                  id='soft_skill'
                  name='soft_skill'
                  value={inputValue.soft_skill}
                  // placeholder='Name*'
                  onChange={changeBt}
                  // onKeyDown={() => {
                  //   setFormError({ ...formerror, Name: '' })
                  // }}
                />
              </div>
              <div className='col-lg-12 col-md-12 relativeError '>
                <label htmlFor='desired_skill'>Desired Skill</label>

                <input
                  type='text'
                  className='form-controller'
                  id='desired_skill'
                  name='desired_skill'
                  value={inputValue.desired_skill}
                  // placeholder='Name*'
                  onChange={changeBt}
                  // onKeyDown={() => {
                  //   setFormError({ ...formerror, Name: '' })
                  // }}
                />
              </div>

              <div className='text-left mt-3'>{
                (idObject[1].actionOnly=='EDIT')?(
                <button className='btn btn-success '>Update</button>
                ):(<button className='btn btn-success '>Submit</button>)
               } </div>
            </div>
          </form>
        </section>
      )}
      {navData.action1 == 'showAllData' && (
        <section className='third-sec sec-section'>
        <div className='text-left'>
        <h2>
          Jobs
        </h2>
          
          </div>
          <div className='row' style={{marginTop:"18px"}}>
            <div className='col-md-4 borderFor bold'>
              <p> Name</p>
            </div>
            {/* <div className="col-md-2 borderFor">

<p> Image</p>

</div> */}

            <div className='col-md-2 borderFor bold'>
              <p> Experience</p>
            </div>
            <div className='col-md-2 borderFor bold'>
              <p> Location</p>
            </div>
            <div className='col-md-2 borderFor bold '>
              <p> Status</p>
            </div>

            <div className='col-md-2 borderFor bold '>
              <p> Action</p>
            </div>
          </div>

          {onlyData.map(arr => {
            return (
              <div className='row'>
                <div className='col-md-4 borderFor'>
                  <p>{arr.jobTitle}</p>
                </div>

                <div className='col-md-2 borderFor'>
                  <p>{arr.experience}</p>
                </div>
                <div className='col-md-2 borderFor'>
                  <p>{arr.location}</p>
                </div>
                <div className='col-md-2 borderFor '>
                  <p onClick={activeChange} id={arr.id_} className='active-block'>{arr.status}</p>
                </div>

                <div className='col-md-2 borderFor action '>
                  <p>
                    <button> Action</button>{' '}
                  </p>

                  <select id='sampleorder' value={arr.id_} onChange={myHandle}>
                    {/* <option > </option> */}
                    {/* <option value={org.id}   data-amount="VIEW">VIEW</option> */}

                    <option hidden value={arr.id_} data-amount='EDIT'>
                    
                    </option>
                    <option  value={arr.id_} data-amount='EDIT'>
                    EDIT
                    </option>
                    <option value={arr.id_} data-amount='DELETE'>
                      DELETE
                    </option>
                    {/* <option  data-amount="EDIT">EDIT</option>
    <option  data-amount="DELETE">DELETE</option> */}
                  </select>
                </div>
              </div>
            )
          })}
        </section>
      )}



      <div className='pop-up'id='unblurred'>
<div className='pop-up-inner'>
<div className='icon'>
< FiAlertCircle style={{color:"red",fontSize:"50px",textAlign:'center'}}/>
</div>
  <div className='delete'>
  <p>Are you sure ?</p>

  </div>


  <div className='para'>
  <p>Do you really want to delete these records ? </p>
  <p id='in'> This process can not be undone</p>

  </div>
  <div className='confirmation'>
  <button className='button1' onClick={deleteOn}>DELETE</button>
  <button className='button2' onClick={deleteOff} >CANCEL</button>

  </div>
  </div>
</div>

    </>
  )
}
