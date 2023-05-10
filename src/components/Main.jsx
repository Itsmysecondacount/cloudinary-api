import React, { useState } from 'react';
import '../Styles/Main.scss';
import MyDropzone from './MyDropZone';

const Main = () => {
	const [uploadedFileUrl, setUploadedFileUrl] = useState('');
	const [modifiedURL, setModifiedURL] = useState('');

	return (
		<main>
			<h2>Soy el cuerpo</h2>
			<MyDropzone
				uploadedFileUrl={uploadedFileUrl}
				setUploadedFileUrl={setUploadedFileUrl}
			/>
		</main>
	);
};

export default Main;
