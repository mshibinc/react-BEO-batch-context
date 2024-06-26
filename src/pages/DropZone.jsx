import React, { useCallback, useState } from 'react'
import Dropzone, { useDropzone } from 'react-dropzone'
export default function DropZone() {
    const [active,setActive]=useState(false)
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
const showMenu =()=>{
    setActive(!active)
//   let element = document.getElementById("subMenu");
//   element.classList.toggle("show-sub-menu");
}
    return (
        <>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>

            <div className="cm-header-wrap">
		<div className="cm-menu-wrap">
			<div className="cm-menu-btn fa fa-bars"></div>
			<div className="cm-menu-inner">
				<ul className="menu-ul clear-all">
					<li className="has-child">
						<a href="#">Menu 1</a>
						<ul className="menu-ul">
							<li className="has-child">
								<a href="#">Sub-menu 1</a>
								<ul className="menu-ul">
									<li>
										<a href="#">Sub-Menu level 3</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">Sub-menu 2</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Menu 2</a>
					</li>
					<li>
						<a href="#">Menu 3</a>
					</li>
					<li>
						<a href="#">Menu 4</a>
					</li>
					<li>
						<a href="#">Menu 5</a>
					</li>
					<li className="has-child">
						<a href="#" onClick={showMenu}>Menu 6</a>
						<ul className={active?"show-sub-menu menu-ul":"menu-ul"} id='subMenu'>
							<li>
								<a href="#">Sub-menu 1</a>
							</li>
							<li>
								<a href="#">Sub-menu 2</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>




        </>
    )
}
