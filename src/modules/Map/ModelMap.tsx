import React, {useState} from "react"
import ViewMap from "src/modules/Map/ViewMap"
import {PageMode} from "src/types/PageType"
import {MapType} from "src/types/MapType"


const ModelMap = (): React.JSX.Element => {

    //
    // ----- Состояние
    //
    const [mode, setMode] = useState<PageMode>(PageMode.Map)
    const [mapType, setMapType] = useState<MapType>(MapType.Political)
    const [region, setRegion] = useState<string>('')

    return (
        <ViewMap
            mode={mode}

            mapType={mapType}
            region={region}

            onClickMode={setMode}
            onClickMap={setMapType}
            setRegion={setRegion}
        />
    )
}

export default ModelMap