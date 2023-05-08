
function clickOutside(node, opts) {
    function detect({ target }) {
        if (opts !== undefined) {
            const ignore = document.getElementById(opts);
            if (ignore?.contains(target))
                return;
            if (!node.contains(target)) {
                node.dispatchEvent(new CustomEvent('clickoutside'));
            }
        }
        else {
            if (!node.contains(target)) {
                node.dispatchEvent(new CustomEvent('clickoutside'));
            }
        }
    }
    document.addEventListener('click', detect, { passive: true, capture: true });
    return {
        destroy() {
            document.removeEventListener('click', detect);
        }
    };
}
export default clickOutside;