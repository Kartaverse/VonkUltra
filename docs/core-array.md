# Array Nodes

## Node Listing

Create:
- vArrayFromCSV
- vArrayFromDataWindow
- vArrayFromJSON
- vArrayFromLuaTable
- vArrayFromMediaIn
- vArrayFromMetadata
- vArrayFromXML
- vArrayFromYAML

Flow:
- vArraySwitch
- vArrayWireless

Key Value:
- vArrayGet
- vArrayGetElement
- vArrayGetIndex
- vArrayGetKey
- vArrayKeys

Script:
- vArrayDoString

Substring:
- vArraySubReturn

Temporal:
- vArrayTimeSpeed
- vArrayTimeStretch

Utility:
- vArrayConcatenate
- vArrayCountElement
- vArrayCountSubElements
- vArrayJoin
- vArrayMatch
- vArraySize
- vArraySlice
- vArrayViewer

## Node Docs

### Create

#### vArrayFromCSV

Creates a JSON array from a CSV row or column

The "Array Mode" control provides two options: "Extract Row", and "Extract Column". This makes it easy to select which axis of CSV data you would like to grab a sample from.

The "Ignore Header Row" checkbox will offset the first index position to start at line 2 in the CSV file. This will skip over a labelled header row in the source document to avoid that information being accessed as part of the ingested data.

![vArrayFromCSV](Images/Nodes/vArrayFromCSV.png)

The output from vArrayFromCSV is typically connected to an vArrayGetIndex node. This makes it possible to select an individual cell of data.

#### vArrayFromDataWindow

Casts DataWindow to an array

![vArrayFromDataWindow](Images/Nodes/vArrayFromDataWindow.png)

#### vArrayFromJSON

Casts JSON text into a JSON array

![vArrayFromJSON](Images/Nodes/vArrayFromJSON.png)

#### vArrayFromLuaTable

Casts a Lua Table to an array

A Lua table structure is used as the underlying format for Fusion .comp files, Fusion macro/effects template .setting files, Reactor .atom packages, Fusion preference .prefs, and for Lua metadata table results.

![vArrayFromLuaTable](Images/Nodes/vArrayFromLuaTable.png)

#### vArrayFromMediaIn

Casts a Resolve MediaIn MediaProps to an array

This makes it possible to read MediaPool/Edit page timeline information provided by a MediaIn node.

![vArrayFromMediaIn](Images/Nodes/vArrayFromMediaIn.png)

#### vArrayFromMetadata

Casts metadata to an array

This node translates metadata records into a JSON based array structure. This supports tasks like parsing EXR formatted image metadata to extract Cryptomatte matte manifest records.

![vArrayFromMetadata](Images/Nodes/vArrayFromMetadata.png)

#### vArrayFromXML

Creates a JSON array from XML

The vArrayFromXML node works with XML formatted plain-text data. The XML data is read from a "vTextFromFile", "vTextFromNet", or "vTextFromZip" node.

The output from the vArrayFromXML node is a text data type. The XML records are converted on-the-fly and stored in a JSON based array structure.

This JSON array formatted data can be navigated and extracted using the Vonk provided "vArray" nodes like the "vArrayGetElement" node.

![vArrayFromXML](Images/Nodes/vArrayFromXML.png)

#### vArrayFromYAML

Creates a JSON array from YAML

Technology Note: [YAML](https://yaml.org/) is used as part of Film & TV production lens metadata workflows by Cine lenses with sensors and encoders like the [Cooke Optics /i Technology](https://cookeoptics.com/i-technology/) metadata system. YAML metadata exchange is also starting to be used by other Cine lens manufacturers, in match-moving and tracking packages like [SynthEyes](https://www.ssontech.com/) and PFTrack, and as part of data exchange approaches like [OpenTimelineIO](https://github.com/reinecke/otio-cookelensmetadata), too.

Blackmagic BRAW media filmed on a [BMD URSA Mini Pro 12K](https://www.blackmagicdesign.com/products/blackmagicursaminipro) camera with a Cooke Optics PL-mount lens is capable of holding this YAML metadata recorded lens information internally. This is useful for supporting better data interchange between VP (Virtual Production) onset ICVFX (In-Camera VFX) departments and subsequent post-production workflows carried out by external vendors.

![vArrayFromYAML](Images/Nodes/vArrayFromYAML.png)

### Flow

#### vArraySwitch

Switch between Fusion JSON arra objects

The "Which" control uses an integer number that starts at 1 and counts upwards to define the input connection port that is passed through to the output connection.

If you are using a logical comparator that works on a false/true based 0-1 number range and want to connect it to a vArraySwitch node's Which input connection, that works on a 1+ number range, simply insert a vNumberAdd node set to increment the number upwards by 1.

The "Show Which Input" checkbox is used to hide the Number datatype based input connection for the Which parameter in the Nodes view.

The "Show Active Input" checkbox is used as a visualization and diagnostics mode. When enabled, this control automatically toggles the visibility off for the inactive connection wirelines fed into the switch node. This approach makes it possible to visually see in a quick glance the source comp branch that is selected as the input and used by the Which control. All other inputs will be turned into hidden wireless inputs when not in use.

![vArraySwitch](Images/Nodes/vArraySwitch.png)

#### vArrayWireless

Create wireless links between JSON array objects

The vArrayWireless node allows you to connect to other USD based nodes in your comp without drawing the connection wirelines visually in the Flow/Nodes view. This can be helpful if you need to reduce clutter.

![vArrayWireless](Images/Nodes/vArrayWireless.png)

### Key Value

#### vArrayGet

Gets the value of a key in an array

![vArrayGet](Images/Nodes/vArrayGet.png)

#### vArrayGetElement

Creates Text from an array element

![vArrayGetElement](Images/Nodes/vArrayGetElement.png)

#### vArrayGetIndex

Creates Text from an array

![vArrayGetIndex](Images/Nodes/vArrayGetIndex.png)

#### vArrayGetKey

Gets the value of a key in an array

![vArrayGetKey](Images/Nodes/vArrayGetKey.png)

#### vArrayKeys

Returns the keys present in an array

![vArrayKeys](Images/Nodes/vArrayKeys.png)

### Script

#### vArrayDoString

Return Array text from running a string of Lua code

![vArrayDoString](Images/Nodes/vArrayDoString.png)

### Substring

#### vArraySubReturn

Concatenates an array

![vArraySubReturn](Images/Nodes/vArraySubReturn.png)

### Temporal

#### vArrayTimeSpeed

Time based operation on Array

![vArrayTimeSpeed](Images/Nodes/vArrayTimeSpeed.png)

#### vArrayTimeStretch

Time based operation on Array

![vArrayTimeStretch](Images/Nodes/vArrayTimeStretch.png)

### Utility

#### vArrayConcatenate

Concatenates an array

![vArrayConcatenate](Images/Nodes/vArrayConcatenate.png)

#### vArrayCountElement

Counts the elements in an Array

![vArrayCountElement](Images/Nodes/vArrayCountElement.png)

#### vArrayCountSubElements

Counts the sub-elements in an Array

![vArrayCountSubElements](Images/Nodes/vArrayCountSubElements.png)

#### vArrayJoin

Gets the value of a key in an array

![vArrayJoin](Images/Nodes/vArrayJoin.png)

#### vArrayMatch

Gets the value of a key in an array

The "Pattern" text field uses [Lua Patterns](http://lua-users.org/wiki/PatternsTutorial) to isolate values from a JSON based Array object. Additional information about patterns can be read in the [Lua manual](https://www.lua.org/manual/5.3/manual.html#6.4.1).

"`cryptomatte/[a-z0-9]+/manifest`" is a vArrayMatch Pattern that can be used to access Cryptomatte manifest image metadata. This information can be read from an EXR image via a Loader -\> vArrayFromMetadata -\> vArrayMatch node graph connection process.

![vArrayMatch](Images/Nodes/vArrayMatch.png)

#### vArraySize

Gets the size of an array

![vArraySize](Images/Nodes/vArraySize.png)

#### vArraySlice

Creates Text from an array

![vArraySlice](Images/Nodes/vArraySlice.png)

#### vArrayViewer

View a JSON array in the Inspector

![vArrayViewer](Images/Nodes/vArrayViewer.png)
