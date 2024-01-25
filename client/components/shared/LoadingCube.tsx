import { BoxGeometry, EdgesGeometry, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import React, { useEffect, useRef } from 'react';

const LoadingCube: React.FC<{ height: string }> = ({ height }) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>();

    useEffect(() => {
        const currentRef = mountRef.current;
        if (!currentRef) return;

        const scene = new Scene();
        const camera = new PerspectiveCamera(75, currentRef.clientWidth / parseInt(height), 0.1, 1000);
        const renderer = new WebGLRenderer({ alpha: true });
        renderer.setSize(currentRef.clientWidth, parseInt(height));

        const geometry = new BoxGeometry(2, 2, 2);

        // Create edge material
        const edgeMaterial = new LineBasicMaterial({ color: 'aqua' });
        const edges = new EdgesGeometry(geometry);
        const cubeEdges = new LineSegments(edges, edgeMaterial);
        scene.add(cubeEdges);

        // Create face material
        const faceMaterial = new MeshBasicMaterial({ color: 'aqua', opacity: 0.2, transparent: true });
        const cubeMesh = new Mesh(geometry, faceMaterial);
        scene.add(cubeMesh);

        camera.position.z = 5;

        const animate = () => {
            cubeEdges.rotation.x += 0.01;
            cubeEdges.rotation.y += 0.01;
            cubeMesh.rotation.x += 0.01;
            cubeMesh.rotation.y += 0.01;

            renderer.render(scene, camera);
            requestRef.current = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            camera.aspect = currentRef.clientWidth / parseInt(height);
            camera.updateProjectionMatrix();
            renderer.setSize(currentRef.clientWidth, parseInt(height));
        };

        window.addEventListener('resize', handleResize);
        currentRef.appendChild(renderer.domElement);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', handleResize);
            currentRef.removeChild(renderer.domElement);
        };
    }, [height]);

    return <div ref={mountRef} style={{ height, width: '100%' }} />;
};

export default LoadingCube;
