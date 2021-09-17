export function mouseWheelDirection(e) {
    let mouseWheelDirection = e.wheelDelta >= 0 ? 'up':'down'
    
    return {
        mouseWheelDirection
    };
  }