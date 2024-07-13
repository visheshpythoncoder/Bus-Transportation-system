import { NavLink } from 'react-router-dom';
import DashboardCard01 from './DashboardCard01';
import WelcomeBanner from './WelcomeBanner';

export default function Transport() {
   
  return (
    <>
     <div className='relative right-0'>
      <WelcomeBanner/>
       <div className="grid grid-cols-12 gap-6">
      
      <DashboardCard01 name="ADD NEW STOP" im='src/images/icon-07.svg' img1="src/images/Bus Stop-amico.png" link='/dashboard/transportpage1'/> 

      
       <DashboardCard01 name="ADD NEW BUS" im='src/images/icon-07.svg' img1="src/images/icon-06.svg" link='/dashboard/transportpage2' /> 

      
      <DashboardCard01 name="CREATE NEW ROUTE" im='src/images/icon-07.svg' img1="src/images/icon-09.svg" link='/dashboard/transportpage3' />

    
       
    </div>
    </div>
    
     
    </>
  )
}