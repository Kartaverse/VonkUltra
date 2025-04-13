# Array Nodes

## Node Listing

Create:

- vArrayBuffer
- vArrayCircularPoints
- vArrayCreate
- vArrayCreateJSONFont
- vArrayCreateList
- vArrayCreateMinMax
- vArrayCreateRandom
- vArrayCreateTextFont
- vArrayFromAudio
- vArrayFromOBJ
- vArrayFromXYZ
- vArrayGenerateSphere
- vArrayGenerateSpirals
- vArrayGenerateText
- vArrayLissajouseSpline
- vArrayLogarithmicSpiral
- vArrayMapGeoJSON
- vArrayPhyllotaxis
- vArrayPointParticles
- vArrayPointsHexagonGrid
- vArrayPointsOnCircle
- vArrayPointsOnCube
- vArrayPointsOnGrid
- vArrayPointsOnRectangle
- vArrayPointsOnSphere
- vArrayToOBJ
- vArrayToXYZ

Logic:

- vArrayLogicBetween

Modify:

- vArrayBoundingBox
- vArrayCameraProjection
- vArrayConvert2D-3D
- vArrayDisplaceValues
- vArrayInterpolate
- vArrayIterator
- vArrayMapRange
- vArrayMath
- vArrayPacker
- vArrayParallelPointsOffSet
- vArrayPerlin3Noise
- vArrayPointsConnect
- vArrayPointsOnArc
- vArrayRotateValues
- vArraySin
- vArraySortByDistance
- vArrayTangentVector
- vArrayTextWrap
- vArrayTranslate
- vArrayUnPacker
- vArrayWave

ShapeRender:

- vArrayShapeRender
- vArrayShapeRenderTextPath

Shapes:

- vArrayCustom2DShapes
- vArrayCustom3DShapes
- vArrayShapeText
- vArrayTangentVectorItem

Temporal:

- vArrayAccumulator
- vArrayAccumulatorOBJ

Utility:

- vArrayAppend
- vArrayAppendGroup
- vArrayInfo
- vArrayMerge
- vArrayMergeOBJ
- vArrayReducePoints
- vArraySlicer.fuse

## Node Docs

### Create

#### vArrayBuffer

FIFO (first in first out) in an array

![Node](Images/Nodes/vArrayBuffer.png)

Example Node Connections:

    vArrayBuffer.Low = 1
    vArrayBuffer.High = 10
    vArrayBuffer.Output -> vArrayViewer.Text

#### vArrayCircularPoints

Distributes points in circular form

![Node](Images/Nodes/vArrayCircularPoints.png)

Example Node Connections:

    vArrayCircularPoints1.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayCreate

Creates an Array

![Node](Images/Nodes/vArrayCreate.png)

Example Node Connections:

    vArrayCreate.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayCreateJSONFont

Generates a JSON array-based font

![Node](Images/Nodes/vArrayCreateJSONFont.png)

Example Node Connections:

    vJSONFromFile.Output -> vArrayCreateJSONFont.JSON_Font
    vArrayCreateJSONFont.Output -> vArrayCameraProjection.ArrayA
    vArrayCreateJSONFont.ScriptVal_Groups -> vArrayShapeRender.ArrayGroups
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayCreateList

Creates an Array

![Node](Images/Nodes/vArrayCreateList.png)

Example Node Connections:

    vArrayCreateList.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayCreateMinMax

Creates Array based on Max/Min operations

![Node](Images/Nodes/vArrayCreateMinMax.png)

Example Node Connections:

    vArrayCreateMinMax.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayCreateRandom

Creates a Random Array

![Node](Images/Nodes/vArrayCreateRandom.png)

Example Node Connections:

    vArrayCreateRandom.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayCreateTextFont

Creates Text Font

![Node](Images/Nodes/vArrayCreateTextFont.png)

Example Node Connections:

    vArrayCreateTextFont.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayFromAudio

Convert .wav audio data into a vArray format

![Node](Images/Nodes/vArrayFromAudio.png)

Example Node Connections:

    vTextCreateBrowse.Output -> vArrayFromAudio.WaveFile
    vArrayFromAudio.Output -> vArrayViewer.Text
    vArrayFromAudio.Output -> vArrayCountElement.Text

#### vArrayFromOBJ

Convert Wavefront OBJ mesh data into a vArray format

![Node](Images/Nodes/vArrayFromOBJ.png)

Example Node Connections:

    vArrayFromOBJ.Points -> vArrayCameraProjection.ArrayA
    vArrayFromOBJ.Edges -> vArrayShapeRender.ArrayEdge
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayFromXYZ

Convert ASCII XYZ point cloud data into a vArray format

![Node](Images/Nodes/vArrayFromXYZ.png)

Example Node Connections:

    vArrayFromXYZ.Points -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

Transform XYZ Points Node Connections:

    vArrayFromXYZ.Points -> vArrayMath.ArrayA
    vMatrixCreateTRS1.Output -> vArrayMath.ArrayB
    vArrayMath.Operation = "Matrix Multiply"
    vArrayMath.Output -> vArrayToXYZ.ArrayA
    vArrayToXYZ.Output -> vTextToFile.Input

#### vArrayGenerateSphere

Generates a Sphere with longitude/latitude lines

![Node](Images/Nodes/vArrayGenerateSphere.png)

Example Node Connections:

    vArrayGenerateSphere.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayGenerateSpirals

Generate Spiral splines

![Node](Images/Nodes/vArrayGenerateSpirals.png)

Example Node Connections:

    vArrayGenerateSpirals.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayGenerateText

Example, generating random Text and Strings

![Node](Images/Nodes/vArrayGenerateText.png)

The following Generate Random options are available:

- Pick from → input Array
- Lorem ipsum

Basics:

- Bool
- Character
- Word
- Letter
- Vowel

Names:

- Name
- Male name
- Male name w/last
- Name w/last
- Female name
- Female name w/last

Numbers:

- Hash
- Integer
- Integer w/min
- Integer w/both

Color:

- rgb
- rgba
- hsl 
- hsla

Tech:

- ip
- ipv4
- ipv6

Location:

- Phone
- Address
- Street

Strings:

- String
- Syllable
- Shuffle

Lorem ipsum Node Connections:

    vArrayGenerateText.chanceOperation = "Lorem ipsum"
    vArrayGenerateText.selectMode = "Paragraph"
    vArrayGenerateText.paragraphCount = 8
    vArrayGenerateText.Output -> vArrayTextWrap.Array
    vArrayTextWrap.Text -> vTextViewer.Input

Name Node Connections:

    vArrayGenerateText.chanceOperation = "Name"
    vArrayGenerateText.arrayLength = 1
    vArrayGenerateText.Output -> vArrayViewer.Text

Female name with last name Node Connections:

    vArrayGenerateText.chanceOperation = "Female name w/last"
    vArrayGenerateText.arrayLength = 1
    vArrayGenerateText.Output -> vArrayViewer.Text

RGB Color Node Connections:

    vArrayGenerateText.chanceOperation = "rgb"
    vArrayGenerateText.arrayLength = 12
    vArrayGenerateText.OutputValData -> vArrayViewer.Text

IPv4 Node Connections:

    vArrayGenerateText.chanceOperation = "ipv4"
    vArrayGenerateText.arrayLength = 1
    vArrayGenerateText.OutputValData -> vArrayViewer.Text

#### vArrayLissajouseSpline

Generate a Lissajouse spline

![Node](Images/Nodes/vArrayLissajouseSpline.png)

Example Node Connections:

    vArrayLissajouseSpline.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayLogarithmicSpiral

Generate a logarithmic Spiral spline

![Node](Images/Nodes/vArrayLogarithmicSpiral.png)

Example Node Connections:

    vArrayLogarithmicSpiral.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayMapGeoJSON

Map from geographic coordinates

![Node](Images/Nodes/vArrayMapGeoJSON.png)

Example Node Connections:

    vJSONFromFile.Output -> vArrayMapGeoJSON.ArrayA
    vArrayMapGeoJSON.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    vArrayMapGeoJSON.ScriptVal_Groups -> vArrayShapeRender.ArrayGroups
    Background.Output -> vArrayShapeRender.Input

#### vArrayPhyllotaxis

Generate points on Phyllotaxis

![Node](Images/Nodes/vArrayPhyllotaxis.png)

Example Node Connections:

    vArrayPhyllotaxis.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayPointParticles

Simple particle generator

![Node](Images/Nodes/vArrayPointParticles.png)

Example Node Connections:

    vArrayPointParticles.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayPointsHexagonGrid

Generate points on Hexagon Grid

![Node](Images/Nodes/vArrayPointsHexagonGrid.png)

Example Node Connections:

    vArrayPointsHexagonGrid.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayPointsOnCircle

Generate points on Array circle

![Node](Images/Nodes/vArrayPointsOnCircle.png)

Example Node Connections:

    vArrayPointsOnCircle.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayPointsOnCube

Generate points on cube

![Node](Images/Nodes/vArrayPointsOnCube.png)

Example Node Connections:

    vArrayPointsOnCube.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayPointsOnGrid

Generate points on Array Grid

![Node](Images/Nodes/vArrayPointsOnGrid.png)

Example Node Connections:

    vArrayPointsOnGrid.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayPointsOnRectangle

Generate points on Rectangle

![Node](Images/Nodes/vArrayPointsOnRectangle.png)

Example Node Connections:

    vArrayPointsOnRectangle.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayPointsOnSphere

Generate points on Sphere

![Node](Images/Nodes/vArrayPointsOnSphere.png)

Example Node Connections:

    vArrayPointsOnSphere.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayToOBJ

Convert an Array into Wavefront OBJ ASCII Text

![Node](Images/Nodes/vArrayToOBJ.png)

Example Node Connections:

    vArrayFromOBJ1.Points -> vArrayMergeOBJ.Points1
    vArrayFromOBJ1.Edges -> vArrayMergeOBJ.Edges1
    vArrayFromOBJ2.Points -> vArrayMergeOBJ.Points2
    vArrayFromOBJ2.Edges -> vArrayMergeOBJ.Edges2
    vArrayMergeOBJ.OutputPoints -> vArrayToOBJ.ArrayPoints
    vArrayMergeOBJ.OutputEdges -> vArrayToOBJ.ArrayEdges
    vArrayToOBJ.Output -> vTextViewer.Input
    vArrayToOBJ.Output -> vTextToFile.Input

#### vArrayToXYZ

Convert an Array into XYZ ASCII Text

![Node](Images/Nodes/vArrayToXYZ.png)

Example Node Connections:

    vArrayFromXYZ.Points -> vArrayToXYZ.ArrayA
    vArrayToXYZ.Output -> vTextToFile.Input

### Logic

#### vArrayLogicBetween

Logic Between Operations on an Array. If value of array is between min and max then the value is 1 else 0

![Node](Images/Nodes/vArrayLogicBetween.png)

Example Node Connections:

    vArrayUnPacker.OutputArray -> vArrayLogicBetween.ArrayA 
    vArrayLogicBetween.Output -> vArraySortByDistance.Array
    ArraySortByDistance.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayViewer.Text

### Modify

#### vArrayBoundingBox

Calculate a 3D, 2D, or 1D bounding box volume from an Array of XYZ/XY/X points

![Node](Images/Nodes/vArrayBoundingBox.png)

Example Node Connections:

    vArrayFromOBJ.Points -> vArrayBoundingBox.ArrayA
    vArrayBoundingBox.Points -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    vArrayBoundingBox.Edges -> vArrayShapeRender.ArrayEdge
    Background.Output -> vArrayShapeRender.Input

#### vArrayCameraProjection

Transforms Array using a perspective projection matrix

![Node](Images/Nodes/vArrayCameraProjection.png)

Example Node Connections:

    vArrayFromXYZ.Points -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayConvert2D-3D

Convert 2D array to 3D array

![Node](Images/Nodes/vArrayConvert2D-3D.png)

Example Node Connections:

    vArrayCameraProjection.Output -> vArrayConvert2D_3D.ArrayA
    vArrayConvert2D_3D.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayDisplaceValues

Displace XYZ positions using noise with spherical falloff

![Node](Images/Nodes/vArrayDisplaceValues.png)

Example Node Connections:

    vArrayCircularPoints.Output -> vArrayDisplaceValues.ArrayA
    vArrayDisplaceValues.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayInterpolate

Interpolate between two arrays

![Node](Images/Nodes/vArrayInterpolate.png)

Select Easing options include:

- linear
- easeInQuad
- easeOutQuad
- easeInOutQuad
- easeInExpo
- easeOutExpo
- easeInOutExpo

Match Array options include:
- Trim Array to match
- Add Zeros to match

Example Node Connections:

    vArrayCircularPoints1.Output -> vArrayInterpolate.ArrayA
    vArrayCircularPoints2.Output -> vArrayInterpolate.ArrayB
    vArrayInterpolate.Output -> vArrayViewer.Text

#### vArrayIterator

Loop an array

![Node](Images/Nodes/vArrayIterator.png)

Example Node Connections:

    vArrayUnPacker.OutputArray -> vArrayIterator.ArrayA 
    vArrayIterator.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayViewer.Text

#### vArrayMapRange

Map Range Operations on an Array

![Node](Images/Nodes/vArrayMapRange.png)

Example Node Connections:

    vArrayUnPacker.OutputArray -> vArrayMapRange.ArrayA 
    vArrayMapRange.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayViewer.Text

#### vArrayMath

Math Operations on an Array

![Node](Images/Nodes/vArrayMath.png)

Tip: If you want to apply math operations to arrays of XY or XYZ value pairs, the vArrayUnPacker node will extract all the values into a single linear sequence of numbers. You can then use the vArrayMath node to modify the values. Then a vArrayPacker node can remux the linear sequence of numbers back into XY or XYZ value pairs.

Example Node Connections:

    vArrayGenerateSpirals.Output -> vArrayUnPacker.ArrayB
    vArrayUnPacker.OutputArray -> vArrayMath.ArrayA 
    vArrayMath.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayViewer.Text

The following math operations are supported:

- Subtract A-B
- Multiply
- Divide A/B
- Min
- Max
- Average
- Difference
- Modulo A/B
- Power A^B
- Arc Tangent A/B
- Sine
- Cosine
- Tangent
- Arc Sine
- Arc Cosine
- Arc Tangent
- Log
- Log 10
- Exponential
- Degrees to Radians
- Radians to Degrees
- Absolute Value
- Ceiling
- Floor
- Square Root
- Reciprocal
- Negate
- Random
- Randomseed
- Matrix Multiply

Tip: A Vonk vMatrix transform can be applied to an array when the "Operation" control is set to "Matrix Multiply", and the "Input Number" is set to "Use Array". The ideal vMatrix node to use for this application is the "vMatrixCreateTRS" node that combines translation, rotation, and scale.

Matrix Multiply Node Connections:

    vArrayGenerateSpirals.Output -> vArrayMath.ArrayA
    vMatrixCreateTRS1.Output -> vArrayMath.ArrayB
    vArrayMath.Operation = "Matrix Multiply"
    vArrayMath.Output -> vArrayViewer.Text

#### vArrayPacker

Pack Operations on an Array

![Node](Images/Nodes/vArrayPacker.png)

Example Node Connections:

    vArrayPointsOnCircle.Output -> vArrayUnPacker.ArrayB
    vArrayUnPacker.OutputArray -> vArraySin.ArrayA 
    vArraySin.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayParallelPointsOffSet

Offset the parallel points in an array

![Node](Images/Nodes/vArrayParallelPointsOffSet.png)

#### vArrayPerlin3Noise

Perlin Noise function on array values

![Node](Images/Nodes/vArrayPerlin3Noise.png)

Example Node Connections:

    vArrayCircularPoints.Output->  vArrayUnPacker.ArrayA
    vArrayUnPacker.OutputArray -> vArrayPerlin3Noise.Input
    vArrayPerlin3Noise.Array ->  vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayPointsConnect

Connect points in an array

![Node](Images/Nodes/vArrayPointsConnect.png)

Example Node Connections:

    vArrayLissajouseSpline1.Output->  vArrayUnPacker1.ArrayA
    vArrayLissajouseSpline2.Output->  vArrayUnPacker2.ArrayA
    vArrayUnPacker1.OutputArray -> vArrayPointsConnect.ArrayA
    vArrayUnPacker2.OutputArray -> vArrayPointsConnect.ArrayB
    vArrayPointsConnect.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayPointsOnArc

Generate points on an arc

![Node](Images/Nodes/vArrayPointsOnArc.png)

Example Node Connections:

    vArrayCreateMinMax.Output -> vArrayPointsOnArc.ArrayA
    vArrayPointsOnArc.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayRotateValues

Rotate Array Between Operations on an Array

![Node](Images/Nodes/vArrayRotateValues.png)

Example Node Connections:

    vArrayPointsHexagonGrid.Output -> vArrayRotateValues.ArrayA
    vArrayRotateValues.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArraySin

Math Sin - Cos Operations on an Array

![Node](Images/Nodes/vArraySin.png)

Example Node Connections:

    vArrayPointsOnCircle.Output -> vArrayUnPacker.ArrayB
    vArrayUnPacker.OutputArray -> vArraySin.ArrayA 
    vArraySin.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArraySortByDistance

Sort array by point distance

![Node](Images/Nodes/vArraySortByDistance.png)

Example Node Connections:

    vArrayUnPacker.OutputArray -> vArrayLogicBetween.ArrayA 
    vArrayLogicBetween.Output -> vArraySortByDistance.Array
    vArraySortByDistance.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayViewer.Text

#### vArrayTangentVector

Create a vector that is tangent to a curve or surface at a given point

![Node](Images/Nodes/vArrayTangentVector.png)

Example Node Connections:

    vArrayLogarithmicSpiral.Output -> vArrayTangentVector.ArrayPath
    vArrayTangentVector.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayTextWrap

Text wrap Operations on a Array

![Node](Images/Nodes/vArrayTextWrap.png)

Example Node Connections:

    vArrayGenerateText.chanceOperation = "Lorem ipsum"
    vArrayGenerateText.selectMode = "Paragraph"
    vArrayGenerateText.paragraphCount = 8
    vArrayGenerateText.Output -> vArrayTextWrap.Array
    vArrayTextWrap.Text -> vTextViewer.Input

#### vArrayTranslate

Transforms array positions

![Node](Images/Nodes/vArrayTranslate.png)

Example Node Connections:

    vArrayPointsOnGrid.Output -> vArrayUnPacker.ArrayA
    vArrayUnPacker.OutputArray -> vArrayTranslate.ArrayA
    vArrayTranslate.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayWave.ArrayA
    vArrayWave.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayUnPacker

Unpack Operations on an Array

![Node](Images/Nodes/vArrayUnPacker.png)

Example Node Connections:

    vArrayPointsOnCircle.Output -> vArrayUnPacker.ArrayB
    vArrayUnPacker.OutputArray -> vArraySin.ArrayA 
    vArraySin.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayWave

Animates an array

![Node](Images/Nodes/vArrayWave.png)

Wave options include:

- Line
- Saw
- Tri
- Square
- Sine
- Noise

Example Node Connections:

    vArrayPointsOnGrid.Output -> vArrayWave.ArrayA
    vArrayWave.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

### ShapeRender

#### vArrayShapeRender

Create a polygon dot shapes from an Array based Lua table of XY point pairs

![Node](Images/Nodes/vArrayShapeRender.png)

Example Node Connections:

    vArrayFromOBJ.Points -> vArrayCameraProjection.ArrayA
    vArrayFromOBJ.Edges -> vArrayShapeRender.ArrayEdge
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayShapeRenderTextPath

Using Text and Strings on Array based Lua table of XY points path

![Node](Images/Nodes/vArrayShapeRenderTextPath.png)

Example Node Connections:

    vArrayCircularPoints.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayConvert2D_3D.ArrayA
    vArrayConvert2D_3D.Output -> vArrayShapeRenderTextPath.ArrayPath
    Background.Output -> vArrayShapeRenderTextPath.Input
    vTextCreate.Output -> vArrayShapeRenderTextPath.inputtext

### Shapes

#### vArrayCustom2DShapes

Dynamically create 2D Shape elements

![Node](Images/Nodes/vArrayCustom2DShapes.png)

Example Node Connections:

    vArrayPointsOnCircle1.Output -> vArrayUnPacker.ArrayB
    vArrayUnPacker.OutputArray -> vArraySin.ArrayA 
    vArraySin.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    vArrayCustom2DShapes.Output -> vArrayShapeRender.ArrayShape
    Background.Output -> vArrayShapeRender.Input

#### vArrayCustom3DShapes

Dynamically create Shape elements

![Node](Images/Nodes/vArrayCustom3DShapes.png)

Example Node Connections:

    vArrayPointsOnCircle.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    vArrayCustom3DShapes.Output -> vArrayShapeRender.ArrayShape
    Background.Output -> vArrayShapeRender.Input

#### vArrayShapeText

Example, using Text and Strings

![Node](Images/Nodes/vArrayShapeText.png)

Example Node Connections:

    vArrayPointsOnCircle.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
    vArrayShapeText.OutputValShape -> vArrayShapeRender.ArrayShape

#### vArrayTangentVectorItem

Create a vector that is tangent to a curve or surface at a given point

![Node](Images/Nodes/vArrayTangentVectorItem.png)

Example Node Connections:

    vArrayLogarithmicSpiral.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayTangentVectorItem.ArrayPath
    vArrayTangentVectorItem.Output -> vArrayShapeRender.ArrayShape
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

### Temporal

#### vArrayAccumulator

Temporally concatenate array elements

![Node](Images/Nodes/vArrayAccumulator.png)

Example Node Connections:

    vArrayCreateTextFont.Output -> vArrayAccumulator.ArrayA
    vNumberCompRenderStart.Output -> vArrayAccumulator.StartFrame
    vNumberCompRenderEnd.Output -> vArrayAccumulator.EndFrame
    vArrayAccumulator.Output -> vArrayUnPacker.ArrayA
    vArrayUnPacker.OutputArray_1 -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayAccumulatorOBJ

Temporally concatenate Wavefront OBJ geometry with edge and point array elements

![Node](Images/Nodes/vArrayAccumulatorOBJ.png)

Example Node Connections:

    vArrayFromOBJ.Edges -> vArrayAccumulatorOBJ.Edges1
    vArrayFromOBJ.Points -> vArrayMath.ArrayA
    vMatrixCreateTRS1.Output -> vArrayMath.ArrayB
    vArrayMath.Operation = "Matrix Multiply"
    vArrayMath.Output -> vArrayAccumulatorOBJ.Points1
    vArrayAccumulatorOBJ.OutputEdges -> vArrayShapeRender.ArrayEdge
    vArrayAccumulatorOBJ.OutputPoints -> -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

### Utility

#### vArrayAppend

Append Array to an array

![Node](Images/Nodes/vArrayAppend.png)

Example Node Connections:

    vArrayPointsOnCircle.Output -> vArrayAppend.In_Array
    vArrayAppend.Output -> vArrayUnPacker.ArrayB
    vArrayUnPacker.OutputArray -> vArraySin.ArrayA 
    vArraySin.Output -> vArrayPacker.ArrayA
    vArrayPacker.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayAppendGroup

Append Array Groups to an array

![Node](Images/Nodes/vArrayAppendGroup.png)

#### vArrayInfo

Returns info of an array

![Node](Images/Nodes/vArrayInfo.png)

Example Node Connections:

    vArrayPointsOnCube.Output -> vArrayUnPacker.ArrayB
    vArrayUnPacker.OutputArray -> vArrayInfo.ArrayA

#### vArrayMerge

Dynamically join Array elements into one table

![Node](Images/Nodes/vArrayMerge.png)

Example Node Connections:

    vArrayPointsOnCircle1.Output -> vArrayMerge.Array1
    vArrayPointsOnCircle2.Output -> vArrayMerge.Array2
    vArrayMerge.Output -> vArrayPacker.ArrayA
    vArrayMerge.SelectMode = "Flatten"
    vArrayPacker.InputNumber = "XYZ"
    vArrayPacker.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArrayMergeOBJ

Merge Wavefront OBJ geometry with edge and point Arrays

![Node](Images/Nodes/vArrayMergeOBJ.png)

Example Node Connections:

    vArrayFromOBJ1.Points -> vArrayMergeOBJ.Points1
    vArrayFromOBJ1.Edges -> vArrayMergeOBJ.Edges1
    vArrayFromOBJ2.Points -> vArrayMergeOBJ.Points2
    vArrayFromOBJ2.Edges -> vArrayMergeOBJ.Edges2
    vArrayMergeOBJ.OutputPoints -> vArrayToOBJ.ArrayPoints
    vArrayMergeOBJ.OutputEdges -> vArrayToOBJ.ArrayEdges
    vArrayToOBJ.Output -> vTextViewer.Input
    vArrayToOBJ.Output -> vTextToFile.Input

#### vArrayReducePoints

Reduce points Operations on an Array

![Node](Images/Nodes/vArrayReducePoints.png)

Decimation Method options include:

- Grid-Based
- Random Sampling
- Curvature-Based (SLOW)

Example Node Connections:

    vArrayPointsOnSphere.Output -> vArrayReducePoints.ArrayA
    vArrayReducePoints.Output -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input

#### vArraySlicer

Trim the start and end of single or multi-dimensional arrays

![Node](Images/Nodes/vArraySlicer.png)

Example Node Connections:

    vArrayCircularPoints.Output -> vArraySlicer.Input
    vArraySlicer.Array -> vArrayCameraProjection.ArrayA
    vArrayCameraProjection.Output -> vArrayShapeRender.ArrayPoint
    Background.Output -> vArrayShapeRender.Input
    vArrayShapeText.OutputValShape -> vArrayShapeRender.ArrayShape
