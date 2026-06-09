import { useEffect, useRef } from 'react';

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const onMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    const expandCursor = () => {
      if (cursor) {
        cursor.style.width = '500px';
        cursor.style.height = '500px';
        cursor.style.opacity = '0.6';
      }
    };

    const shrinkCursor = () => {
      if (cursor) {
        cursor.style.width = '400px';
        cursor.style.height = '400px';
        cursor.style.opacity = '0.4';
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    // Using event delegation on body instead of attaching to all elements individually
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') {
        expandCursor();
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') {
        shrinkCursor();
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <div className="cursor-glow" ref={cursorRef}></div>;
}

export default CustomCursor;
