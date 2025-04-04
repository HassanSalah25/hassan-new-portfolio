'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter() {
	// Isotope
	const isotope = useRef<Isotope | null>(null)
	const [filterKey, setFilterKey] = useState<string>("*")

	useEffect(() => {
		const timeout = setTimeout(() => {
			isotope.current = new Isotope(".masonry-active", {
				itemSelector: ".filter-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".filter-item",
				},
			})
		}, 1000)

		// Cleanup on unmount
		return () => clearTimeout(timeout)
	}, [])

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
		}
	}, [filterKey])

	const handleFilterKeyChange = useCallback((key: string) => () => {
		setFilterKey(key)
	}, [])

	const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase")

	return (
		<>
			<div className="container">
				<div className="text-start">
					<div className="button-group filter-button-group filter-menu-active">
						<button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Projects</button>
						<button className={activeBtn("ecommerce")}
								onClick={handleFilterKeyChange("ecommerce")}>E-commerce
						</button>
						<button className={activeBtn("erp")} onClick={handleFilterKeyChange("erp")}>ERP</button>
						<button className={activeBtn("healthcare")}
								onClick={handleFilterKeyChange("healthcare")}>Healthcare
						</button>
						<button className={activeBtn("directory")}
								onClick={handleFilterKeyChange("directory")}>Directories
						</button>
					</div>
				</div>

				<div className="row masonry-active justify-content-between mt-6">
					<div className="grid-sizer"/>

					{/* Cotton House Kidswear */}
					<div className="filter-item col-lg-6 col-12 ecommerce">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="#">
								<img className="rounded-3 w-100 zoom-img"
									 src="/assets/imgs/projects/projects-1/cotton-house.png" alt="Cotton House"/>
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="#" className="project-card-content">
									<h3 className="fw-semibold">Cotton House Kidswear</h3>
									<p>Custom fashion e-commerce with Laravel</p>
								</Link>
								<Link href="#"
									  className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line"/>
								</Link>
							</div>
						</div>
					</div>

					{/* Grand Gate */}
					<div className="filter-item col-lg-6 col-12 ecommerce directory">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="#">
								<img className="rounded-3 w-100 zoom-img"
									 src="/assets/imgs/projects/projects-1/grand-gate.png" alt="Grand Gate"/>
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="#" className="project-card-content">
									<h3 className="fw-semibold">Grand Gate</h3>
									<p>Responsive showcase for premium gates</p>
								</Link>
								<Link href="#"
									  className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line"/>
								</Link>
							</div>
						</div>
					</div>

					{/* Cordiana ERP */}
					<div className="filter-item col-lg-6 col-12 erp">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="#">
								<img className="rounded-3 w-100 zoom-img"
									 src="/assets/imgs/projects/projects-1/cordiana.png" alt="Cordiana ERP"/>
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="#" className="project-card-content">
									<h3 className="fw-semibold">Cordiana ERP</h3>
									<p>Full ERP with inventory, finance & RBAC</p>
								</Link>
								<Link href="#"
									  className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line"/>
								</Link>
							</div>
						</div>
					</div>

					{/* Neo Healthcare Register */}
					<div className="filter-item col-lg-6 col-12 healthcare app">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="#">
								<img className="rounded-3 w-100 zoom-img"
									 src="/assets/imgs/projects/projects-1/neo-health.png" alt="Neo Healthcare"/>
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="#" className="project-card-content">
									<h3 className="fw-semibold">Neo Health Register</h3>
									<p>Patient scheduling with confirmations</p>
								</Link>
								<Link href="#"
									  className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line"/>
								</Link>
							</div>
						</div>
					</div>

					{/* Egypt Directory */}
					<div className="filter-item col-lg-6 col-12 directory webdesign">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="#">
								<img className="rounded-3 w-100 zoom-img"
									 src="/assets/imgs/projects/projects-1/aladdin-directory.png"
									 alt="Egypt Business Directory"/>
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="#" className="project-card-content">
									<h3 className="fw-semibold">Aladdin Eg Directory</h3>
									<p>Location-based listings with filters & maps</p>
								</Link>
								<Link href="#"
									  className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line"/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
