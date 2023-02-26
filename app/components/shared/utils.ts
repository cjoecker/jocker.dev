export function getAltTextFromFileName(filename: string) {
	return filename.replace('.svg', '').replace('-', ' ');
}
