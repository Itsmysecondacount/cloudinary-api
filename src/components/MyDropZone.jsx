import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import '../Styles/MyDropZone.scss';

export default function MyDropZone({ uploadedFileUrl, setUploadedFileUrl }) {
	const onDrop = useCallback((acceptedFiles) => {
		const formData = new FormData();
		formData.append('file', acceptedFiles[0]);
		formData.append('upload_preset', 'ml_default');

		axios
			.post('https://api.cloudinary.com/v1_1/ds84at0ef/image/upload', formData)
			.then((response) => {
				console.log(response.data.secure_url);
				setUploadedFileUrl(response.data.secure_url);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const { fileRejections, acceptedFiles, getRootProps, getInputProps, isDragActive } =
		useDropzone({
			onDrop,
			maxFiles: 1,
			accept: {
				'image/png': ['.png', '.jpg'],
			},
		});

	const fileRejectionItems = fileRejections.map(({ file, errors }) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
			<ul>
				{errors.map((e) => (
					<li key={e.code}>{e.message}</li>
				))}
			</ul>
		</li>
	));

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	return (
		<>
			<div
				{...getRootProps()}
				className={`drop-zone ${isDragActive && 'drop-zone-droping '}`}
			>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : (
					<p>Drag 'n' drop some files here, or click to select files</p>
				)}
			</div>
			<aside>
				<h4>Files</h4>
				<ul>{files}</ul>
				<h4 className="warning">Rejected files</h4>
				<ul>{fileRejectionItems}</ul>
				{uploadedFileUrl && (
					<div>
						<h4>Uploaded File URL:</h4>
						{!uploadedFileUrl ? undefined : (
							<p>
								<a href={uploadedFileUrl} target="_blank">
									Archivo subido correctamente
								</a>
							</p>
						)}
					</div>
				)}
			</aside>
		</>
	);
}
