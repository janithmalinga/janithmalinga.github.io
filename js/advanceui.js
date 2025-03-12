/**
   * Function to create a draggable box and a modal inside a given container.
   * @param {string} containerId - The ID of the container element where UI elements will be placed.
   */
  function createAdvancedUI(containerId) {
    // Get the container
    const container = document.getElementById(containerId);
    if (!container) {
      console.error("Container not found!");
      return;
    }

    /***************************
     * 1) Create a draggable box
     ***************************/
    const draggableBox = document.createElement("div");
    draggableBox.classList.add("draggable-box");
    draggableBox.textContent = "Drag Me";
    
    // Variables to track dragging state
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    // Mouse down event: start dragging
    draggableBox.addEventListener("mousedown", (e) => {
      isDragging = true;
      // Calculate the offset from the box’s top-left corner
      offsetX = e.clientX - draggableBox.offsetLeft;
      offsetY = e.clientY - draggableBox.offsetTop;
    });

    // Mouse move event: while dragging, update position
    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      // Keep the box within the window boundaries if you like,
      // or just allow free movement:
      draggableBox.style.left = (e.clientX - offsetX) + "px";
      draggableBox.style.top = (e.clientY - offsetY) + "px";
    });

    // Mouse up event: stop dragging
    document.addEventListener("mouseup", () => {
      isDragging = false;
    });

    // Add the draggable box to the container
    container.appendChild(draggableBox);

    /*********************
     * 2) Create a modal
     *********************/
    // Create an overlay for the modal
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");

    // Create the modal content box
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalContent.innerHTML = `
      <h2>Sample Modal</h2>
      <p>This is a simple modal dialog.</p>
    `;

    // Create a button to close the modal
    const closeModalBtn = document.createElement("button");
    closeModalBtn.classList.add("close-modal-btn");
    closeModalBtn.textContent = "Close Modal";
    
    // When the user clicks the close button, hide the modal
    closeModalBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });
    
    // Put everything together
    modalContent.appendChild(closeModalBtn);
    overlay.appendChild(modalContent);
    document.body.appendChild(overlay); // Typically appended at document root

    // Optional: Close the modal by clicking outside of it (on the overlay)
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.style.display = "none";
      }
    });

    /********************************
     * 3) Hook up the "Open Modal" button
     ********************************/
    const openModalBtn = document.getElementById("openModalBtn");
    if (openModalBtn) {
      openModalBtn.addEventListener("click", () => {
        overlay.style.display = "flex";
      });
    }
  }

  // Example usage of createAdvancedUI:
  // Call this once the page has loaded or when appropriate in your script.
  createAdvancedUI("uiContainer");
