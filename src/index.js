"use strict";
const dragContainer = document.createElement('div');
dragContainer.style.cssText = `
    width: 600px;
    height: 400px;
    border: 2px solid #333;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
`;
document.body.appendChild(dragContainer);
// Create draggable items
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
const dropZones = ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'];
// Create draggable elements
items.forEach((item, index) => {
    const draggable = document.createElement('div');
    draggable.textContent = item;
    draggable.draggable = true;
    draggable.style.cssText = `
        padding: 20px;
        background-color: #4CAF50;
        color: white;
        cursor: move;
        border-radius: 5px;
        user-select: none;
    `;
    draggable.id = `draggable-${index}`;
    draggable.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', draggable.id);
        draggable.style.opacity = '0.5';
    });
    draggable.addEventListener('dragend', () => {
        draggable.style.opacity = '1';
    });
    dragContainer.appendChild(draggable);
});
// Create drop zones
dropZones.forEach((zone, index) => {
    const dropZone = document.createElement('div');
    dropZone.textContent = zone;
    dropZone.style.cssText = `
        width: 120px;
        height: 120px;
        border: 2px dashed #666;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
    `;
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.backgroundColor = '#f0f0f0';
    });
    dropZone.addEventListener('dragleave', () => {
        dropZone.style.backgroundColor = 'transparent';
    });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);
        if (draggedElement) {
            dropZone.innerHTML = '';
            dropZone.appendChild(draggedElement);
            dropZone.style.backgroundColor = 'transparent';
        }
    });
    dragContainer.appendChild(dropZone);
});
// Add game instructions
const instructions = document.createElement('p');
instructions.textContent = 'Drag the items and drop them into the zones!';
instructions.style.textAlign = 'center';
document.body.insertBefore(instructions, dragContainer);
