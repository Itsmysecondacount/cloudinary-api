import { useState, useEffect } from 'react';
import TwoUp from 'two-up-element/dist/two-up';

const StepEdit = (props) => {
	const { uploadedFileUrl, modifiedURL } = props;

	const [downloadURL, setDownloadURL] = useState(modifiedURL);
	const [processingImage, setProcessingImage] = useState(true);
	const [tries, setTries] = useState(0);
	let intervalId;

	useEffect(() => {
		if (processingImage) {
			clearInterval(intervalId);
			intervalId = setInterval(() => {
				setTries((prevTries) => prevTries + 1);
			}, 500);
		}
	}, []);

	const handleImageLoad = () => {
		setProcessingImage(false);
		setDownloadURL(`${modifiedURL}&r=${tries}`);
	};

	return (
		<>
			<div className="step-edit">
				<p>Soy el step edit</p>
				<two-up>
					<img src={uploadedFileUrl} alt="imagen original" />
					<img
						onLoad={handleImageLoad}
						onError={() => setProcessingImage(true)}
						src={`${modifiedURL}&r=${tries}`}
						alt="Imagen Procesada"
					/>
				</two-up>
			</div>
			<a href={downloadURL} target="_blank" download className="type-button">
				Descargar imagen sin fondo
			</a>
		</>
	);
};

export default StepEdit;
