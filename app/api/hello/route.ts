import {NextRequest, NextResponse} from 'next/server'

export function GET(req:NextRequest){
    return NextResponse.json({message:"hello world",status:200})
}
export function POST(req: NextRequest){
    const request = req.body
    return NextResponse.json({message:`request body:${request}`,status:200})
}