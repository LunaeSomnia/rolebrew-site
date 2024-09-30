<script lang="ts">
    export let pathFill: string = "var(--accent-color)";
    export let pathOpacity: string = "0.5";
</script>

<div class="fancy-separator">
    <svg
        class="horizontal-line"
        viewBox="0 0 160 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0L160 7.15256e-07V2L0 2V0ZM0 8L160 8V10L0 10V8Z"
            fill={pathFill}
            fill-opacity={pathOpacity}
        />
    </svg>
    <svg
        class="horizontal-decorator"
        viewBox="0 0 48 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 0C24.5523 0 25 0.447715 25 1C25 8.76577 28.8479 15.6332 34.7454 19.7991C38.5883 17.3918 43.133 16 48 16V18C43.8644 18 39.9858 19.0907 36.6338 21C39.9858 22.9093 43.8644 24 48 24V26C43.133 26 38.5883 24.6083 34.7454 22.2009C28.8479 26.3668 25 33.2342 25 41C25 41.5523 24.5523 42 24 42C23.4477 42 23 41.5523 23 41C23 33.2342 19.1521 26.3668 13.2546 22.2009C9.41167 24.6083 4.86699 26 0 26V24C4.13564 24 8.0142 22.9093 11.3662 21C8.0142 19.0907 4.13564 18 0 18V16C4.86699 16 9.41167 17.3918 13.2546 19.7991C19.1521 15.6332 23 8.76577 23 1C23 0.447715 23.4477 0 24 0ZM24 8.0228C22.4675 13.2683 19.2622 17.7996 15.0023 21C19.2622 24.2004 22.4675 28.7317 24 33.9772C25.5325 28.7317 28.7378 24.2004 32.9977 21C28.7378 17.7996 25.5325 13.2683 24 8.0228Z"
            fill={pathFill}
            fill-opacity={pathOpacity}
        />
    </svg>

    <svg
        class="horizontal-line"
        viewBox="0 0 160 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0L160 7.15256e-07V2L0 2V0ZM0 8L160 8V10L0 10V8Z"
            fill={pathFill}
            fill-opacity={pathOpacity}
        />
    </svg>
</div>

<style lang="scss">
    .fancy-separator {
        display: flex;
        flex-direction: row;
        gap: 0;
        align-items: center;
        height: 2.625rem;
        width: 100%;
    }
    .horizontal-line {
        width: 50%;
        height: 0.625rem;

        & > path {
            width: 100%;
        }
    }

    .horizontal-decorator {
        width: 3rem;
        height: 2.625rem;
    }
</style>
