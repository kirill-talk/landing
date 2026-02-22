<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let value: string;
    export let editing = false;
    export let multiline = false;

    const dispatch = createEventDispatcher();

    let element: HTMLElement;
    let isFocused = false;

    function handleInput() {
        if (element) {
            // Use innerHTML to preserve spans and br tags
            value = element.innerHTML;
            dispatch("change", value);
        }
    }

    function handleFocus() {
        isFocused = true;
    }

    function handleBlur() {
        isFocused = false;
    }

    // Only update innerHTML if not focused to avoid cursor reset
    $: if (element && !isFocused && element.innerHTML !== value) {
        element.innerHTML = value || "";
    }
</script>

<div
    bind:this={element}
    contenteditable={editing}
    on:input={handleInput}
    on:focus={handleFocus}
    on:blur={handleBlur}
    role="textbox"
    tabindex="0"
    class="editable-container {editing ? 'editing' : ''} {multiline
        ? 'multiline'
        : ''}"
    class:rounded={editing}
    class:outline-dashed={editing}
    class:outline-2={editing}
    class:outline-aether-cyan={editing}
    class:p-2={editing}
    class:transition-all={true}
>
    {@html value || ""}
</div>

<style>
    .editable-container {
        display: inline-block;
        min-width: 20px;
        outline: none;
    }

    .editable-container.editing {
        cursor: text;
        background: rgba(255, 255, 255, 0.05);
    }

    .editable-container.multiline {
        display: block;
    }
</style>
