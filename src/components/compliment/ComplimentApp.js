import React, {useEffect} from 'react'
import logoImage from '../../asserts/images/logo.png'
import { useSelector, useDispatch } from 'react-redux'
import { loadData } from '../../redux/complimentRedux/compliment.actions'
import { COMPLIMENT_KEY } from '../../redux/complimentRedux/compliment.reducer'

const ComplimentApp = () => {
    // initialize useDispatch
    let dispatch = useDispatch()

useEffect( () =>{
    dispatch(loadData())

}, [])

// view data from store
let viewCompliment = useSelector((state) =>{
    return state[COMPLIMENT_KEY]

})
    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(viewCompliment)}</pre> */}
            <div className='row mt-3'>
                <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div className='card text-center'>
                        <div className='card-header'>
                            <h5 className='font-weight-bold'>COMPLIMENTARY CARD APP WITH JSON API</h5>
                        </div>


                        <div className='card-body'>
                           {
                               viewCompliment.data.map((item) =>{
                                   return(
                                       <div key={item.id}>
                                                          <div className='cardContainer'>
                               <div className='leftSide centered'>
                                   <img src={logoImage} alt='logo image' width='30px'/>
                               </div>



                               <div className='rightSide'>
                                  <div className='rightContent'>
                                     <div className='fontAwesome'>
                                         <i className='fa fa-user centered'></i>
                                     </div>
                                     <div className='content'>
                                         <p>{item.name}</p>
                                     </div>
                                  </div>

                                  <div className='rightContent'>
                                     <div className='fontAwesome'>
                                         <i className='fa fa-phone centered'></i>
                                     </div>
                                     <div className='content'>
                                         <p>{item.phone}</p>
                                     </div>
                                  </div>

                                  <div className='rightContent'>
                                     <div className='fontAwesome'>
                                         <i className='fa fa-envelope centered'></i>
                                     </div>
                                     <div className='content'>
                                         <p>{item.email}</p>
                                     </div>
                                  </div>
                               </div>
                            </div>
                                       </div>
                                   )

                               })
                           }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
            
        
    )
}

export default ComplimentApp
