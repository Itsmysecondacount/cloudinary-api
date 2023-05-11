import React, { useState } from 'react';
import '../Styles/Main.scss';
import MyDropzone from './MyDropZone';
import StepEdit from './StepEdit';

const Main = () => {
	const [uploadedFileUrl, setUploadedFileUrl] = useState('');
	const [modifiedURL, setModifiedURL] = useState('');
	const [publicId, setPublicId] = useState('');

	console.log(publicId);

	return (
		<main>
			<h2>Soy el cuerpo</h2>

			{uploadedFileUrl != '' ? (
				<StepEdit uploadedFileUrl={uploadedFileUrl} modifiedURL={modifiedURL} />
			) : (
				<MyDropzone
					uploadedFileUrl={uploadedFileUrl}
					setUploadedFileUrl={setUploadedFileUrl}
					modifiedURL={modifiedURL}
					setModifiedURL={setModifiedURL}
					setPublicId={setPublicId}
					publicId={publicId}
				/>
			)}
		</main>
	);
};

export default Main;
