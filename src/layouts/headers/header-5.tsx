"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/images/logo/logo.png';
import Menus from './component/menus';
import useSticky from '@/hooks/use-sticky';
import LoginModal from '@/app/components/common/popup/login-modal';

const HeaderFive = () => {  
	const {sticky} = useSticky();
  return (
    <>
     <header className={`theme-main-menu menu-overlay sticky-menu ${sticky?'fixed':''}`}>
			<div className="inner-content position-relative">
				<div className="top-header">
					<div className="d-flex align-items-center">
						<div className="logo order-lg-0">
							<Link href="/" className="d-flex align-items-center">
								<Image src={logo} alt="CNR Handy Services logo" width={40} height={40}/>
								<span className="ms-2 fw-bold text-dark fs-4">CNR</span>
							</Link>
						</div>
						<div className="right-widget ms-auto ms-lg-0 order-lg-2">
							<ul className="d-flex align-items-center style-none">
								<li><a href="#" className="fw-500 text-dark" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a></li>
								<li className="d-none d-md-block ms-4"><Link href='/register' className="btn-five">Register</Link></li>
							</ul>
						</div>

						<nav className="navbar navbar-expand-lg p0 me-lg-auto ms-3 ms-lg-5 order-lg-1">
							<button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
								data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
								aria-label="Toggle navigation">
								<span></span>
							</button>
							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="navbar-nav">
									<li className="d-block d-lg-none"><div className="logo">
                    <Link href="/" className="d-flex align-items-center">
                      <Image src={logo} alt="CNR Handy Services logo" width={40} height={40}/>
                      <span className="ms-2 fw-bold text-dark fs-4">CNR Handy Services</span>
                    </Link>
                    </div>
                  </li>
									{/* menus start */}
									 <Menus />
                  {/* menus end */}
									<li className="d-md-none mt-5"><Link href="/register" className="btn-five w-100">Register</Link></li>
								</ul>
							</div>
						</nav>
					</div>
				</div> 
			</div> 
		</header> 

		{/* login modal start */}
		<LoginModal/>
    {/* login modal end */}
    </>
  );
};

export default HeaderFive;