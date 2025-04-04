import Link from "next/link"

export default function Home1() {
	return (
		<>
			<section className="section-hero-1 position-relative pt-200 pb-120 overflow-hidden">
				<div className="container position-relative z-3">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<span className="text-dark">👋 Salaam! I'm Hassan Gohar</span>
							<h1 className="ds-2 mb-3">I Build <span className="text-primary-1">Robust Backend Systems</span> That Scale</h1>
							<p className="text-300 mb-6">
								I'm a Laravel and WordPress developer with 3+ years of experience building over 20 scalable web apps—from e-commerce platforms and ERP systems to LMS solutions. I turn ideas into fast, secure, and maintainable products that drive growth.
							</p>
							<Link href="/assets/resume.pdf" className="btn btn-gradient me-2" target="_blank">
								Download CV
								<i className="ri-download-line ms-2" />
							</Link>
							<Link href="/work" className="btn btn-outline-secondary d-inline-flex align-items-center">
								<span>View My Portfolio</span>
								<i className="ri-arrow-right-line ms-2" />
							</Link>
							<p className="text-400 mt-6 mb-3">20+ real-world projects shipped & optimized</p>
							<div className="d-flex gap-3">
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="https://pngimg.com/uploads/php/php_PNG50.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="https://pngimg.com/uploads/mysql/mysql_PNG23.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 d-none d-md-flex">
									<img src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" alt="brand" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
					<img className="position-relative z-1 " src="/assets/imgs/hero/hero-1/logo1.png" alt="man" />
					<div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
					</div>
				</div>
				<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="assets/imgs/hero/hero-1/background.png" />
			</section>
		</>
	)
}
