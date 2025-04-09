# Meta Nodes

## Node Listing

Comp:
- vMetadataFromComp
- vMetadataToComp

Resolve:
- vMetadataFromMediaIn

Text:
- vMetadataFilename
- vMetadataFromText
- vMetadataToText

Utility:
- vMetadataViewer

## Node Docs

### vMetadataFromComp

Creates a Fusion image with metadata added from a Fusion Studio comp

![vMetadataFromComp](Images/Nodes/vMetadataFromComp.png)

### vMetadataToComp

Creates a Fusion comp from image metadata

![vMetadataToComp](Images/Nodes/vMetadataToComp.png)

### vMetadataFromMediaIn

Creates a Fusion image with MediaIn MediaProps metadata

This node is connected directly to a MediaIn node. It extracts the MediaProps record from a MediaIn node and places that data into the image's metadata Lua table.

![vMetadataFromMediaIn](Images/Nodes/vMetadataFromMediaIn.png)

The MediaProps based Metadata Lua table output is formatted like:

    {
        "MEDIA_FORMAT_TYPE":"PNG",
        "MEDIA_HEIGHT":64,
        "MEDIA_IS_SOURCE_RES":true,
        "MEDIA_LAYER_DESC":[],
        "MEDIA_MARK_IN":0,
        "MEDIA_MARK_OUT":0,
        "MEDIA_NAME":"Fusion-Logo.png"
        "MEDIA_NUM_FRAMES":1,
        "MEDIA_NUM_LAYERS":0,
        "MEDIA_PAR":1,
        "MEDIA_PATH":"/Users/vfx/Reactor/Deploy/Comps/Kartaverse/Vonk Ultra/Media/Fusion-Logo.png",
        "MEDIA_SRC_FRAME_RATE":24,
        "MEDIA_START_FRAME":0,
        "MEDIA_WIDTH":64,
    }

### vMetadataFilename

Creates a Fusion Text object from an image's metadata filename

![vMetadataFilename](Images/Nodes/vMetadataFilename.png)

### vMetadataFromText

Creates a Fusion image with metadata added from text

This node is similar to the SetMetadata.fuse with the addition of input connections on the node that accepts a Text data type for the "Field Name", and "Field Value".

![vMetadataFromText](Images/Nodes/vMetadataFromText.png)

A metadata example for Fusion Viewer based Stereo3D "Over/Under" image content is:

    Field Name: Stereo
    Field Value: {Method  = "vstack"}

A metadata example for Fusion Viewer based Stereo3D "Side by Side" image content is:

    Field Name: Stereo
    Field Value: {Method  = "hstack"}

A metadata example for Fusion Viewer window based 360VR "Latitude/Longitude" image projection content is:

    Field Name: Pano
    Field Value: {Format = "LatLong"}

### vMetadataToText

Creates a Fusion Text object from metadata

This node is similar to the GetMetadata.fuse with the addition of a "Key" input connection on the node that accepts a Text data type.

The "Key" field is used to specify the metadata record.

An example of an image metadata record "Key" entry would be the Loader node added attribute of "Filename".

![vMetadataToText](Images/Nodes/vMetadataToText.png)

### vMetadataViewer

View the image metadata in the Inspector

![vMetadataViewer](Images/Nodes/vMetadataViewer.png)
