import { renderHook } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useBubbles } from './useBubbles'
import { mock } from 'jest-mock-extended';
import p5Types from 'p5';
import { useRef } from 'react';

describe("useBubbles tests", () => {

    useRef
    test("setup triggers `noLoop` to ensure the canvas only draws once", () => {
        expect(2).toBe(2)
        const { result } = renderHook(() => useBubbles())
        const { setup } = result.current;
        const mockP5 = mock<p5Types>();
        const mockParent = mock<Element>()
        setup(mockP5, mockParent)
        expect(mockP5.noLoop).toHaveBeenCalled()
    })
})