import { useTonConnectUI } from "@tonconnect/ui-react";

export const Disconnect = () => {

    const [tonConnectUI] = useTonConnectUI();

    const handleDisconnect = async() => {
        await tonConnectUI.disconnect();
    }


    return(
        <button onClick={handleDisconnect} 
        style={{background: "red"}} >
            Disconnect
        </button>
    )
}