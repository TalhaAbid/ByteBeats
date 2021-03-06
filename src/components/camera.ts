import { PerspectiveCamera } from 'three'


const createCamera = (): PerspectiveCamera => {
	const camera: PerspectiveCamera = new PerspectiveCamera(
		35, // fov = Field of View
		1, // asepect ratio (dummy value)
		0.1, // near clipping plane
		100 // far clipping plane
	)
	camera.position.set(0, 0, 10);
	return camera;
}

export { createCamera };
