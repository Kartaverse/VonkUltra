# ScriptVal Nodes

## Node Listing

Create:

- vScriptValBuffer
- vScriptValCircularPoints
- vScriptValCreateAsset
- vScriptValCreateJSONFont
- vScriptValCreateList
- vScriptValCreateMinMax
- vScriptValCreateRandom
- vScriptValCreateTextFont
- vScriptValFromAudio
- vScriptValFromOBJ
- vScriptValFromXYZ
- vScriptValGenerateSphere
- vScriptValGenerateSpirals
- vScriptValGenerateText
- vScriptValLissajouseSpline
- vScriptValLocatorAsset
- vScriptValLogarithmicSpiral
- vScriptValMapGeoJSON
- vScriptValPhyllotaxis
- vScriptValPointParticles
- vScriptValPointsHexagonGrid
- vScriptValPointsOnCircle
- vScriptValPointsOnCube
- vScriptValPointsOnGrid
- vScriptValPointsOnRectangle
- vScriptValPointsOnSphere
- vScriptValToOBJ
- vScriptValToXYZ

Logic:

- vScriptValLogicBetween

Modify:

- vScriptValArrayIterator
- vScriptValBoundingBox
- vScriptValCameraProjection
- vScriptValConvert2D-3D
- vScriptValDisplaceValues
- vScriptValInterpolate
- vScriptValMapRange
- vScriptValMath
- vScriptValPacker
- vScriptValParallelPointsOffSet
- vScriptValPerlin3Noise
- vScriptValPointsConnect
- vScriptValPointsOnArc
- vScriptValRotateValues
- vScriptValSin
- vScriptValSortByDistance
- vScriptValTangentVector
- vScriptValTextWrap
- vScriptValTranslate
- vScriptValUnPacker
- vScriptValWave

ShapeRender:

- vScriptValRenderAsset
- vScriptValRenderAssetSVG
- vScriptValShapeRender
- vScriptValShapeRenderTextPath

Shapes:

- vScriptValCustom2DShapes
- vScriptValCustom3DShapes
- vScriptValShapeTextArray
- vScriptValTangentVectorItem

Utility:

- vScriptValAppend
- vScriptValAppendGroup
- vScriptValInfo
- vScriptValMergeAsset
- vScriptValMergeOBJ
- vScriptValReducePoints
- vScriptValSlicer

## Node Docs

### vScriptValBuffer

FIFO (first in first out) in an array

![Node](Images/Nodes/vScriptValBuffer.png)

Example Node Connections:

    vScriptValBuffer.Low = 1
    vScriptValBuffer.High = 10
    vScriptValBuffer.Output -> vScriptValViewer.ScriptVal

### vScriptValCircularPoints

Distributes points in circular form

![Node](Images/Nodes/vScriptValCircularPoints.png)

Example Node Connections:

    vScriptValCircularPoints1.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValCreateAsset

Create a ScriptVal based 3D asset from Edge, Point, and vMatrix data

![Node](Images/Nodes/vScriptValCreateAsset.png)

Example Node Connections:

    vScriptValFromOBJ.ScriptValPoints -> vScriptValCreateAsset.ScriptValPoints
    vScriptValFromOBJ.ScriptValEdges -> vScriptValCreateAsset.ScriptValEdges
    vScriptValFromOBJ.ScriptValUVs -> vScriptValCreateAsset.ScriptValUVs
    vScriptValFromOBJ.ScriptValUVEdges -> vScriptValCreateAsset.ScriptValEdges
    vScriptValCreateAsset.Output -> vScriptValMergeAsset.ScriptVal1
    vScriptValMergeAsset.Output -> vScriptValRenderAsset.vGeometry
    Background.Output -> vScriptValRenderAsset.Input

### vScriptValCreateJSONFont

Generates a JSON array-based font

![Node](Images/Nodes/vScriptValCreateJSONFont.png)

Example Node Connections:

    vJSONFromFile.Output -> vScriptValCreateJSONFont.JSON_Font
    vScriptValCreateJSONFont.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCreateJSONFont.ScriptVal_Groups -> vScriptValShapeRender.ScriptValGroups
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValCreateList

Create an array by entering each value manually

![Node](Images/Nodes/vScriptValCreateList.png)

Example Node Connections:

    vScriptValCreateList.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValCreateMinMax

Creates Array based on Max/Min operations

![Node](Images/Nodes/vScriptValCreateMinMax.png)

Example Node Connections:

    vScriptValCreateMinMax.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValCreateRandom

Creates a random JSON Array

![Node](Images/Nodes/vScriptValCreateRandom.png)

Example Node Connections:

    vScriptValCreateRandom.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValCreateTextFont

Creates Text Font

![Node](Images/Nodes/vScriptValCreateTextFont.png)

Example Node Connections:

    vScriptValCreateTextFont.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValFromAudio

Convert .wav audio data into a ScriptVal

![Node](Images/Nodes/vScriptValFromAudio.png)

Example Node Connections:

    vTextCreateBrowse.Output -> vScriptValFromAudio.WaveFile
    vScriptValFromAudio.ScriptVal -> vScriptValViewer.ScriptVal
    vScriptValFromAudio.ScriptVal -> vScriptValCount.ScriptVal

### vScriptValFromOBJ

Convert Wavefront OBJ mesh data into a ScriptVal

![Node](Images/Nodes/vScriptValFromOBJ.png)

Example Node Connections:

    vScriptValFromOBJ.ScriptValPoints -> vScriptValCameraProjection.ScriptVal
    vScriptValFromOBJ.ScriptValEdges -> vScriptValShapeRender.ScriptValEdge
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValFromXYZ

Convert ASCII XYZ point cloud data into a ScriptVal

![Node](Images/Nodes/vScriptValFromXYZ.png)

Example Node Connections:

    vScriptValFromXYZ.ScriptValPoints -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValGenerateSphere

Generates a Sphere with longitude/latitude lines

![Node](Images/Nodes/vScriptValGenerateSphere.png)

Example Node Connections:

    vScriptValGenerateSphere.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValGenerateSpirals

Generate Spiral splines

![Node](Images/Nodes/vScriptValGenerateSpirals.png)

Example Node Connections:

    vScriptValGenerateSpirals.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValGenerateText

Example, generating random Text and Strings

![Node](Images/Nodes/vScriptValGenerateText.png)

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

    vScriptValGenerateText.chanceOperation = "Lorem ipsum"
    vScriptValGenerateText.selectMode = "Paragraph"
    vScriptValGenerateText.paragraphCount = 8
    vScriptValGenerateText.OutputValData -> vScriptValTextWrap.ScriptVal
    vScriptValTextWrap.Text -> vTextViewer.Input

Name Node Connections:

    vScriptValGenerateText.chanceOperation = "Name"
    vScriptValGenerateText.arrayLength = 1
    vScriptValGenerateText.OutputValData -> vScriptValViewer.ScriptVal

Female name with last name Node Connections:

    vScriptValGenerateText.chanceOperation = "Female name w/last"
    vScriptValGenerateText.arrayLength = 1
    vScriptValGenerateText.OutputValData -> vScriptValViewer.ScriptVal

RGB Color Node Connections:

    vScriptValGenerateText.chanceOperation = "rgb"
    vScriptValGenerateText.arrayLength = 12
    vScriptValGenerateText.OutputValData -> vScriptValViewer.ScriptVal

IPv4 Node Connections:

    vScriptValGenerateText.chanceOperation = "ipv4"
    vScriptValGenerateText.arrayLength = 1
    vScriptValGenerateText.OutputValData -> vScriptValViewer.ScriptVal

### vScriptValLissajouseSpline

Generate a Lissajouse spline

![Node](Images/Nodes/vScriptValLissajouseSpline.png)

Example Node Connections:

    vScriptValLissajouseSpline.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValLocatorAsset

Create a ScriptVal based 3D locator cursor asset

![Node](Images/Nodes/vScriptValLocatorAsset.png)

Example Node Connections:

    vMatrixCreateTRS.Output -> vScriptValLocatorAsset.Matrix
    vScriptValLocatorAsset.Output -> vScriptValMergeAsset.ScriptVal
    vScriptValMergeAsset.Output -> vScriptValRenderAsset.vGeometry
    Background.Output -> vScriptValRenderAsset.Input

### vScriptValLogarithmicSpiral

Generate a Logarithmic Spiral spline

![Node](Images/Nodes/vScriptValLogarithmicSpiral.png)

Example Node Connections:

    vScriptValLogarithmicSpiral.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValMapGeoJSON

Map from geographic coordinates

![Node](Images/Nodes/vScriptValMapGeoJSON.png)

Example Node Connections:

    vJSONFromFile.Output -> vScriptValMapGeoJSON.ArrayA
    vScriptValMapGeoJSON.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    vScriptValMapGeoJSON.ScriptVal_Groups -> vScriptValShapeRender.ScriptValGroups
    Background.Output -> vScriptValShapeRender.Input

### vScriptValPhyllotaxis

Generate points on Phyllotaxis

![Node](Images/Nodes/vScriptValPhyllotaxis.png)

Example Node Connections:

    vScriptValPhyllotaxis.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValPointParticles

Simple particle generator

![Node](Images/Nodes/vScriptValPointParticles.png)

Example Node Connections:

    vScriptValPointParticles.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValPointsHexagonGrid

Generate points on Hexagon Grid

![Node](Images/Nodes/vScriptValPointsHexagonGrid.png)

Example Node Connections:

    vScriptValPointsHexagonGrid.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValPointsOnCircle

Generate points on a circle

![Node](Images/Nodes/vScriptValPointsOnCircle.png)

Example Node Connections:

    vScriptValPointsOnCircle.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValPointsOnCube

Generate points on cube

![Node](Images/Nodes/vScriptValPointsOnCube.png)

Example Node Connections:

    vScriptValPointsOnCube.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValPointsOnGrid

Generate point on Array Grid

![Node](Images/Nodes/vScriptValPointsOnGrid.png)

Example Node Connections:

    vScriptValPointsOnGrid.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValPointsOnRectangle

Generate points on Rectangle

![Node](Images/Nodes/vScriptValPointsOnRectangle.png)

Example Node Connections:

    vScriptValPointsOnRectangle.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValPointsOnSphere

Generate points on Sphere

![Node](Images/Nodes/vScriptValPointsOnSphere.png)

Example Node Connections:

    vScriptValPointsOnSphere.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValToOBJ

Convert a Fusion ScriptVal object into Wavefront OBJ ASCII Text

![Node](Images/Nodes/vScriptValToOBJ.png)

### vScriptValToXYZ

Convert a Fusion ScriptVal object into XYZ ASCII Text

![Node](Images/Nodes/vScriptValToXYZ.png)

Example Node Connections:

    vScriptValFromXYZ.ScriptValPoints -> vScriptValToXYZ.ScriptVal
    vScriptValToXYZ.Output -> vTextToFile.Input

### vScriptValLogicBetween

Logic Between Operations on an Array

![Node](Images/Nodes/vScriptValLogicBetween.png)

Example Node Connections:

    vScriptValUnPacker.ScriptVal1 -> vScriptValLogicBetween.ScriptVal
    vScriptValLogicBetween.Output -> vScriptValSortByDistance.ScriptVal
    ArraySortByDistance.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValViewer.ScriptVal

### vScriptValArrayIterator

Loop an array

![Node](Images/Nodes/vScriptValArrayIterator.png)

Example Node Connections:

    vScriptValUnPacker.ScriptVal1 -> vScriptValArrayIterator.ArrayA
    vScriptValArrayIterator.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValViewer.ScriptVal

### vScriptValBoundingBox

Calculate a 3D, 2D, or 1D bounding box volume from a ScriptVal object of XYZ/XY/X points

![Node](Images/Nodes/vScriptValBoundingBox.png)

Example Node Connections:

    vScriptValFromOBJ.Points -> vScriptValBoundingBox.ScriptVal
    vScriptValBoundingBox.ScriptValPoints -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    vScriptValBoundingBox.ScriptValEdges -> vScriptValShapeRender.ScriptValEdge
    Background.Output -> vScriptValShapeRender.Input

### vScriptValCameraProjection

Transforms ScriptVals using a perspective projection matrix

![Node](Images/Nodes/vScriptValCameraProjection.png)

Example Node Connections:

    vScriptValFromXYZ.ScriptValPoints -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValConvert2D-3D

Convert 2D array to 3D array

![Node](Images/Nodes/vScriptValConvert2D-3D.png)

Example Node Connections:

    vScriptValCameraProjection.Output -> vScriptValConvert2D_3D.ArrayA
    vScriptValConvert2D_3D.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValDisplaceValues

Displace XYZ positions using noise with spherical falloff.

![Node](Images/Nodes/vScriptValDisplaceValues.png)

Example Node Connections:

    vScriptValCircularPoints.Output -> vScriptValDisplaceValues.ArrayA
    vScriptValDisplaceValues.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValInterpolate

Interpolate between corresponding values in two arrays

![Node](Images/Nodes/vScriptValInterpolate.png)

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

    vScriptValCircularPoints1.Output -> vScriptValInterpolate.ArrayA
    vScriptValCircularPoints2.Output -> vScriptValInterpolate.ArrayB
    vScriptValInterpolate.Output -> vScriptValViewer.ScriptVal

### vScriptValMapRange

Apply range mapping operations to an array

![Node](Images/Nodes/vScriptValMapRange.png)

Example Node Connections:

    vScriptValUnPacker.ScriptVal1 -> vScriptValMapRange.ArrayA
    vScriptValMapRange.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValViewer.ScriptVal

### vScriptValMath

Math Operations on a ScriptVal

![Node](Images/Nodes/vScriptValMath.png)

Tip: If you want to apply math operations to arrays of XY or XYZ value pairs, the vScriptValUnPacker node will extract all the values into a single linear sequence of numbers. You can then use the vScriptValMath node to modify the values. Then a vScriptValPacker node can remux the linear sequence of numbers back into XY or XYZ value pairs.

Example Node Connections:

    vScriptValGenerateSpirals.Output -> vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValMath.ScriptValA
    vScriptValMath.ScriptVal -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValViewer.ScriptVal

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

### vScriptValPacker

Pack Operations on a ScriptVal

![Node](Images/Nodes/vScriptValPacker.png)

Example Node Connections:

    vScriptValPointsOnCircle.Output -> vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValSin.ScriptVal
    vScriptValSin.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValParallelPointsOffSet

Offset the parallel points in an array

![Node](Images/Nodes/vScriptValParallelPointsOffSet.png)

### vScriptValPerlin3Noise

Perlin Noise function on array values

![Node](Images/Nodes/vScriptValPerlin3Noise.png)

Example Node Connections:

    vScriptValCircularPoints.Output->  vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValPerlin3Noise.Input
    vScriptValPerlin3Noise.Output ->  vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValPointsConnect

Connect points in an array

![Node](Images/Nodes/vScriptValPointsConnect.png)

Example Node Connections:

    vScriptValLissajouseSpline1.Output-> vScriptValUnPacker1.ScriptVal
    vScriptValLissajouseSpline2.Output-> vScriptValUnPacker2.ScriptVal
    vScriptValUnPacker1.ScriptVal1 -> vScriptValPointsConnect.ArrayA
    vScriptValUnPacker2.ScriptVal1 -> vScriptValPointsConnect.ArrayB
    vScriptValPointsConnect.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValPointsOnArc

Generate points on an arc

![Node](Images/Nodes/vScriptValPointsOnArc.png)

Example Node Connections:

    vScriptValCreateMinMax.Output -> vScriptValPointsOnArc.ArrayA
    vScriptValPointsOnArc.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValRotateValues

Rotate ScriptVals Between Operations on a ScriptVal Object

![Node](Images/Nodes/vScriptValRotateValues.png)

Example Node Connections:

    vScriptValPointsHexagonGrid.Output -> vScriptValRotateValues.ScriptVal
    vScriptValRotateValues.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValSin

Math Sin - Cos Operations on an Array

![Node](Images/Nodes/vScriptValSin.png)

Example Node Connections:

    vScriptValPointsOnCircle.Output -> vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValSin.ScriptVal
    vScriptValSin.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValSortByDistance

Sort array by point distance

![Node](Images/Nodes/vScriptValSortByDistance.png)

Example Node Connections:

    vScriptValUnPacker.ScriptVal1 -> vScriptValLogicBetween.ScriptVal
    vScriptValLogicBetween.Output -> vScriptValSortByDistance.ScriptVal
    vScriptValSortByDistance.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValViewer.ScriptVal

### vScriptValTangentVector

Create a vector that is tangent to a curve or surface at a given point

![Node](Images/Nodes/vScriptValTangentVector.png)

Example Node Connections:

    vScriptValLogarithmicSpiral.Output -> vScriptValTangentVector.ScriptVal1
    vScriptValTangentVector.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValTextWrap

Text wrap Operations on a ScriptVal

![Node](Images/Nodes/vScriptValTextWrap.png)

Example Node Connections:

    vScriptValGenerateText.chanceOperation = "Lorem ipsum"
    vScriptValGenerateText.selectMode = "Paragraph"
    vScriptValGenerateText.paragraphCount = 8
    vScriptValGenerateText.OutputValData -> vScriptValTextWrap.ScriptVal
    vScriptValTextWrap.Text -> vTextViewer.Input

### vScriptValTranslate

Transforms array positions

![Node](Images/Nodes/vScriptValTranslate.png)

Example Node Connections:

    vScriptValPointsOnGrid.Output -> vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValTranslate.ScriptVal
    vScriptValTranslate.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValWave.ScriptVal
    vScriptValWave.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValUnPacker

Unpack Operations on a ScriptVal object

![Node](Images/Nodes/vScriptValUnPacker.png)

Example Node Connections:

    vScriptValPointsOnCircle.Output -> vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValSin.ScriptVal
    vScriptValSin.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValWave

Animates an Array

![Node](Images/Nodes/vScriptValWave.png)

Wave options include:

- Line
- Saw
- Tri
- Square
- Sine
- Noise

Example Node Connections:

    vScriptValPointsOnGrid.Output -> vScriptValWave.ScriptVal
    vScriptValWave.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValRenderAsset

Render 3D wireframe from a ScriptVal Lua table of vGeometry mesh data

![Node](Images/Nodes/vScriptValRenderAsset.png)

Example Node Connections:

    vScriptValFromOBJ.ScriptValPoints -> vScriptValCreateAsset.ScriptValPoints
    vScriptValFromOBJ.ScriptValEdges -> vScriptValCreateAsset.ScriptValEdges
    vScriptValFromOBJ.ScriptValUVs -> vScriptValCreateAsset.ScriptValUVs
    vScriptValFromOBJ.ScriptValUVEdges -> vScriptValCreateAsset.ScriptValEdges
    vScriptValCreateAsset.Output -> vScriptValMergeAsset.ScriptVal1
    vScriptValMergeAsset.Output -> vScriptValRenderAsset.vGeometry
    Background.Output -> vScriptValRenderAsset.Input

Example Node Connections:

    vMatrixCreateTRS.Output -> vScriptValLocatorAsset.Matrix
    vScriptValLocatorAsset.Output -> vScriptValMergeAsset.ScriptVal
    vScriptValMergeAsset.Output -> vScriptValRenderAsset.vGeometry
    Background.Output -> vScriptValRenderAsset.Input

### vScriptValRenderAssetSVG

Export an SVG wireframe from a ScriptVal Lua table of vGeometry mesh data

![Node](Images/Nodes/vScriptValRenderAssetSVG.png)

Example Node Connections:

    vScriptValFromOBJ.ScriptValPoints -> vScriptValCreateAsset.ScriptValPoints
    vScriptValFromOBJ.ScriptValEdges -> vScriptValCreateAsset.ScriptValEdges
    vScriptValFromOBJ.ScriptValUVs -> vScriptValCreateAsset.ScriptValUVs
    vScriptValFromOBJ.ScriptValUVEdges -> vScriptValCreateAsset.ScriptValEdges
    vScriptValCreateAsset.Output -> vScriptValMergeAsset.ScriptVal1
    vScriptValMergeAsset.Output -> vScriptValRenderAssetSVG.vGeometry
    Background.Output -> vScriptValRenderAssetSVG.Input

Example Node Connections:

    vMatrixCreateTRS.Output -> vScriptValLocatorAsset.Matrix
    vScriptValLocatorAsset.Output -> vScriptValMergeAsset.ScriptVal
    vScriptValMergeAsset.Output -> vScriptValRenderAssetSVG.vGeometry
    Background.Output -> vScriptValRenderAssetSVG.Input

### vScriptValShapeRender

Create a polygon dot shapes from a ScriptVal based Lua table of XY point pairs

![Node](Images/Nodes/vScriptValRenderAssetSVG.png)

Example Node Connections:

    vScriptValFromOBJ.ScriptValPoints -> vScriptValCameraProjection.ScriptVal
    vScriptValFromOBJ.ScriptValEdges -> vScriptValShapeRender.ScriptValEdge
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValShapeRenderTextPath

Using Text and Strings on Array based Lua table of XY points path

![Node](Images/Nodes/vScriptValShapeRenderTextPath.png)

Example Node Connections:

    vScriptValCircularPoints.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValConvert2D_3D.ArrayA
    vScriptValConvert2D_3D.Output -> vScriptValShapeRenderTextPath.ScriptValpath
    Background.Output -> vScriptValShapeRenderTextPath.Input
    vTextCreate.Output -> vScriptValShapeRenderTextPath.inputtext

### vScriptValCustom2DShapes

Dynamically create 2D Shape elements

![Node](Images/Nodes/vScriptValCustom2DShapes.png)

Example Node Connections:

    vScriptValPointsOnCircle1.Output -> vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValSin.ScriptVal
    vScriptValSin.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    vScriptValCustom2DShapes.Output -> vScriptValShapeRender.ScriptValShape
    Background.Output -> vScriptValShapeRender.Input

### vScriptValCustom3DShapes

Dynamically create Shape elements

![Node](Images/Nodes/vScriptValCustom3DShapes.png)

Example Node Connections:

    vScriptValPointsOnCircle.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    vScriptValCustom3DShapes.Output -> vScriptValShapeRender.ScriptValShape
    Background.Output -> vScriptValShapeRender.Input

### vScriptValShapeTextArray

Example, using Text and Strings

![Node](Images/Nodes/vScriptValShapeText.png)

Example Node Connections:

    vScriptValPointsOnCircle.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    vScriptValShapeText.OutputValShape -> vScriptValShapeRender.ScriptValShape
    Background.Output -> vScriptValShapeRender.Input

### vScriptValTangentVectorItem

Create a vector that is tangent to a curve or surface at a given point

![Node](Images/Nodes/vScriptValTangentVectorItem.png)

Example Node Connections:

    vScriptValLogarithmicSpiral.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValTangentVectorItem.ScriptVal1
    vScriptValTangentVectorItem.Output -> vScriptValShapeRender.ScriptValShape
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValAppend

Append Array to an array

![Node](Images/Nodes/vScriptValAppend.png)

Example Node Connections:

    vScriptValPointsOnCircle.Output -> vScriptValAppend.In_Array
    vScriptValAppend.Output -> vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValSin.ScriptVal
    vScriptValSin.Output -> vScriptValPacker.ScriptVal
    vScriptValPacker.ScriptVal -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValAppendGroup

Append Array Groups to an array

![Node](Images/Nodes/vScriptValAppendGroup.png)

### vScriptValInfo

Returns info of an array

![Node](Images/Nodes/vScriptValInfo.png)

Example Node Connections:

    vScriptValPointsOnCube.Output -> vScriptValUnPacker.ScriptVal
    vScriptValUnPacker.ScriptVal1 -> vScriptValInfo.ArrayA

### vScriptValMergeAsset

Dynamically join ScriptVal Asset elements into one table

![Node](Images/Nodes/vScriptValMergeAsset.png)

### vScriptValMergeOBJ

Merge Wavefront OBJ geometry with edge and point ScriptVal Arrays

![Node](Images/Nodes/vScriptValMergeOBJ.png)

### vScriptValReducePoints

Reduce points Operations on a ScriptVal

![Node](Images/Nodes/vScriptValReducePoints.png)

Decimation Method options include:

- Grid-Based
- Random Sampling
- Curvature-Based (SLOW)

Example Node Connections:

    vScriptValPointsOnSphere.Output -> vScriptValReducePoints.ScriptVal
    vScriptValReducePoints.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input

### vScriptValSlicer

Trim the start and end of single or multi-dimensional arrays

![Node](Images/Nodes/vScriptValSlicer.png)

Example Node Connections:

    vScriptValCircularPoints.Output -> vScriptValSlicer.Input
    vScriptValSlicer.Output -> vScriptValCameraProjection.ScriptVal
    vScriptValCameraProjection.Output -> vScriptValShapeRender.ScriptValPoint
    Background.Output -> vScriptValShapeRender.Input
    vScriptValShapeText.OutputValShape -> vScriptValShapeRender.ScriptValShape
