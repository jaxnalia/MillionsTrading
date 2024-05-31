<script lang="ts">
    let message = '';
    let alerttype
    
    
    export function callToast(msg: string, type?: string|undefined, ms?: number|undefined) {
        console.log('callToast()');
        let milliseconds: number = 8000;
        if(ms) { milliseconds = ms; }
        if(type) { alerttype = `alert-${type}`; }
        message = msg;
    
        setTimeout(() => {
            message = '';
        }, milliseconds);
    }
    
</script>
    
    <div class="toast toast-top toast-center">
        {#if message}
        <div role="alert" class="alert {alerttype}">
                <span>{message}</span>
        </div>
        {/if}
    </div>