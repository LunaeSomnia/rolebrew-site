<script lang="ts">
    export let direction: "left" | "right" = "left";
    export let pathFill: string = "#FFB230";
    export let pathOpacity: string = "0.5";
</script>

<div class="fancy-arrow">
    <!-- Horizontal Finisher -->
    {#if direction === "left"}
        <svg
            class="horizontal-finisher"
            viewBox="0 0 27 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 1L22 2H22V1ZM1 4C0.447715 4 0 4.44771 0 5C0 5.55228 0.447715 6 1 6V4ZM27 0H22V2H27V0ZM27 8H22V10H27V8ZM6 4H1V6H6V4ZM22 0C18.575 -7.54595e-05 15.6704 1.06667 13.0971 2.06802C10.4631 3.09298 8.27064 4 6 4V6C8.72936 6 11.3166 4.90694 13.8224 3.93188C16.3889 2.93319 18.9844 1.99993 22 2L22 0ZM22 8C18.9844 8 16.3889 7.06674 13.8224 6.06807C11.3166 5.09301 8.72936 4 6 4V6C8.27064 6 10.4631 6.90699 13.0971 7.93193C15.6704 8.93326 18.5749 10 22 10V8Z"
                fill={pathFill}
                fill-opacity={pathOpacity}
            />
        </svg>

        <!-- Horizontal Line -->
        <svg
            class="horizontal-line"
            viewBox="0 0 160 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0L160 7.15256e-07V2L0 2V0ZM0 8L160 8V10L0 10V8Z"
                fill={pathFill}
                fill-opacity={pathOpacity}
            />
        </svg>

        <!-- Horizontal Decoration -->
        <svg
            class="horizontal-decoration"
            viewBox="0 0 25 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <path
                d="M23 41C23 41.5523 23.4477 42 24 42C24.5523 42 25 41.5523 25 41H23ZM25 1C25 0.447715 24.5523 0 24 0C23.4477 0 23 0.447715 23 1H25ZM0 18C12.7025 18 23 28.2975 23 41H25C25 27.1929 13.8071 16 0 16V18ZM23 1C23 13.7025 12.7025 24 0 24V26C13.8071 26 25 14.8071 25 1H23Z"
                fill={pathFill}
                fill-opacity={pathOpacity}
            />
        </svg>
    {:else}
        <!-- Horizontal Decoration -->
        <svg
            class="horizontal-decoration right"
            viewBox="0 0 25 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M23 41C23 41.5523 23.4477 42 24 42C24.5523 42 25 41.5523 25 41H23ZM25 1C25 0.447715 24.5523 0 24 0C23.4477 0 23 0.447715 23 1H25ZM0 18C12.7025 18 23 28.2975 23 41H25C25 27.1929 13.8071 16 0 16V18ZM23 1C23 13.7025 12.7025 24 0 24V26C13.8071 26 25 14.8071 25 1H23Z"
                fill={pathFill}
                fill-opacity={pathOpacity}
            />
        </svg>

        <!-- Horizontal Line -->
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

        <!-- Horizontal Finisher -->
        <svg
            class="horizontal-finisher right"
            viewBox="0 0 27 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 1L22 2H22V1ZM1 4C0.447715 4 0 4.44771 0 5C0 5.55228 0.447715 6 1 6V4ZM27 0H22V2H27V0ZM27 8H22V10H27V8ZM6 4H1V6H6V4ZM22 0C18.575 -7.54595e-05 15.6704 1.06667 13.0971 2.06802C10.4631 3.09298 8.27064 4 6 4V6C8.72936 6 11.3166 4.90694 13.8224 3.93188C16.3889 2.93319 18.9844 1.99993 22 2L22 0ZM22 8C18.9844 8 16.3889 7.06674 13.8224 6.06807C11.3166 5.09301 8.72936 4 6 4V6C8.27064 6 10.4631 6.90699 13.0971 7.93193C15.6704 8.93326 18.5749 10 22 10V8Z"
                fill={pathFill}
                fill-opacity={pathOpacity}
            />
        </svg>
    {/if}
</div>

<style lang="scss">
    .fancy-arrow {
        display: flex;
        flex-direction: row;
        align-items: center;
        min-width: calc(1.6875rem + 1.5625rem);
    }

    .horizontal-finisher {
        width: 1.6875rem;
        height: 0.625rem;
    }
    .horizontal-line {
        width: calc(100% - 1.6875rem - 1.5625rem);
        height: 0.625rem;
    }

    .horizontal-decoration {
        width: 1.5625rem;
        height: 2.625;
    }

    .right {
        rotate: 180deg;
    }
</style>
