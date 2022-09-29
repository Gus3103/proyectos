const ArchivoExcel = document.getElementById("excel-ìnput")

console.log(ArchivoExcel)

ArchivoExcel.addEventListener("change",async function leer(){
	const content = await readXlsxFile(ArchivoExcel.files[0])
	console.log(content)
	console.log(content[0][1])
})

