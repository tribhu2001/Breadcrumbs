import React from 'react'
import { Link, useLocation } from 'react-router'
import "../App.css"

const BreadCrumbs = () => {
    const { pathname } = useLocation();
    const pathNames = pathname.split("/").filter(x => x);
    console.log(pathNames);
    let breadCrumbPath = '';
    return (
        <div className='breadcrumbs'>
            {pathNames.length>0 && <Link to='/'>Home</Link>}
            {pathNames.map((path,index)=>{
                breadCrumbPath += path;
                
                const isLast = (index === pathNames.length-1);
                return(
                    isLast ? <span key={breadCrumbPath}>/ {path}</span> : <span key={breadCrumbPath}><Link to={breadCrumbPath}>/ {path}</Link></span>
                )
            })}
        </div>
    )
}

export default BreadCrumbs
