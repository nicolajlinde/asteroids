
function CameraZoom() {
	this.normalCameraZoom = 1;
	this.extendedCameraZoom = 0.5;

	this.cameraZoomOut = function()
	{
		if(keyDown('space'))
			camera.zoom = this.extendedCameraZoom;
		else
			camera.zoom = this.normalCameraZoom;
	};
}