import {NextRequest, NextResponse} from 'next/server'
import { json } from 'stream/consumers'

export function GET(req:NextRequest){
    return NextResponse.json({message:"hello world",status:200})
}
export async function POST(req: Request){
    try{
        const rawBody = await req.json();
        if(rawBody.message !== "")
            return NextResponse.json({message:`${rawBody.message}`,status:200})
        else
            return NextResponse.json({message:"no message",status:200})
    }
    catch(err){
        return NextResponse.json({message:err,status:405})
    }
}